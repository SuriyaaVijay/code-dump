import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setPhotos, setLoading, setError, setPage } from '../states/photoSlice';

const Content = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos.items);
  const isLoading = useSelector((state) => state.photos.loading);
  const error = useSelector((state) => state.photos.error);
  const page = useSelector((state) => state.photos.page);
  const query=useSelector((state) => state.search.query);
  // console.log('query :',query)
   
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      dispatch(setLoading(true));
      dispatch(setError(null));

      try {
        const response = await axios.get('https://api.unsplash.com/photos', {
          params: {
            client_id: 'SpaMEhh6ziZMce_0kEoU-Z5kd-b_9jHSY_B5dxQcPOI',
            per_page: 100,
            order_by: 'random',
            page: page,
            query:query,
          },
        });

        const data = response.data;
        dispatch(setPhotos(data));
        dispatch(setPage(page + 1));
      } catch (error) {
        console.log(error);
        dispatch(setError(error.message));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchPhotos();
  }, [page, query, dispatch]);

  const handleInfiniteScroll = () => {
    if (
      scrollContainerRef.current &&
      scrollContainerRef.current.scrollTop + scrollContainerRef.current.clientHeight >=
      scrollContainerRef.current.scrollHeight - 200
    ) {
      dispatch(setPage(page + 1));
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      handleInfiniteScroll();
    };

    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, [page]);


  return (
    <div className="content" ref={scrollContainerRef}>
      {photos.map((photo, id) => (
        <div key={photo.id + id} className="photo-card">
          <img src={photo.urls.regular} alt={photo.alt_description} />
          <div className="photo-details">
            <h3>{photo.user.name}</h3>
          </div>
        </div>
      ))}
      {isLoading && <h2>Loading more...</h2>}
      {error && <h2>Error occurred while fetching photos.</h2>}
    </div>
  );
};

export default Content;
