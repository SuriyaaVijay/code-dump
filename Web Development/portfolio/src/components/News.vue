<template>
  <div class="tokyo_tm_news">
    <div class="tokyo_tm_title">
      <div class="title_flex">
        <div class="left">
          <span>News</span>
          <h3>Latest News</h3>
        </div>
      </div>
    </div>
    <ul class="tokyo_tm_news_inner">
      <li>
        <div class="list_inner">
          <div class="image">
            <img src="../assets/img/thumbs/4-3.jpg" alt="thumb" />
            <div
              class="main"
              :style="{ backgroundImage: 'url(' + popup1 + ')' }"
              @click="showModal"
            ></div>
          </div>
          <!-- End .image -->
          <div class="details">
            <div class="extra">
              <p class="date">
                By <a href="#">Alex Watson</a><span>05 April 2021</span>
              </p>
            </div>
            <!-- End meta info -->
            <h3 class="title" @click="showModal">
              Format releases a new tool that enables direct video hosting
            </h3>
            <div class="tokyo_tm_read_more" @click="showModal">
              <a><span>Read More</span></a>
            </div>
          </div>
          <!-- End .details -->
        </div>

        <!-- Start first modal -->
        <transition name="fade">
          <!-- Modal -->
          <div
            :class="{ 'modal-mask': isActive }"
            id="modal"
            @click="closeModal"
            v-if="isVisible"
          >
            <div
              class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user"
              @click.stop
            >
              <div class="modal-content">
                <div class="tokyo_tm_modalbox_news">
                  <div class="close" @click="closeModal">
                    <img
                      class="svg"
                      src="../assets/img/svg/cancel.svg"
                      alt="cancel-img"
                    />
                  </div>
                  <!-- END CLOSE ICON -->
                  <div class="image">
                    <img src="../assets/img/thumbs/4-3.jpg" alt="tumb" />
                    <div
                      class="main"
                      :style="{ backgroundImage: 'url(' + popup1 + ')' }"
                    ></div>
                  </div>
                  <!-- END IMAGE-->
                  <div class="details">
                    <div class="extra">
                      <p class="date">
                        By <a href="#">Alex Watson</a>
                        <span>05 April 2021</span>
                      </p>
                    </div>
                    <h3 class="title">
                      Format releases a new tool that enables direct video
                      hosting
                    </h3>
                  </div>
                  <!-- END DETAILS -->
                  <div class="main_content ">
                    <div class="descriptions">
                      <p class="bigger">
                        Just because we can't get out and about like we normally
                        would, doesn’t mean we have to stop taking pictures.
                        There’s still plenty you can do, provided you're
                        prepared to use some imagination. Here are a few ideas
                        to keep you shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now so
                        we can remember them when it is all over.
                      </p>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
                      </p>
                      <div class="quotebox">
                        <div class="icon">
                          <img
                            class="svg"
                            src="../assets/img/svg/quote.svg"
                            alt="tumb"
                          />
                        </div>
                        <p>
                          Most photographers find it hard to see interesting
                          pictures in places in which they are most familiar. A
                          trip somewhere new seems always exactly what our
                          photography needed, as shooting away from home
                          consistently inspires us to new artistic heights.
                        </p>
                      </div>
                      <!-- END QUOTEBOX -->
                      <p>
                        Pretend everything is new and that you haven’t seen it
                        before, and then you will be free to notice the leading
                        lines, the places where one edge meets another in
                        delightful geometric harmony, and how the ordinary
                        things in the kitchen are transformed when the light is
                        on or off.
                      </p>
                      <p>
                        The trick here is to look slowly, and then look again.
                        Take the time to look in detail and to look at the same
                        thing from different angles, with different light, long
                        lenses and wide lenses. Then move to the left a bit. You
                        may never feel the need to leave the house again.
                      </p>
                    </div>
                    <!-- END DESCRIPTION -->
                    <div class="news_share">
                      <span>Share:</span>
                      <Social />
                      <!-- END SOCIAL SHARE -->
                    </div>
                    <!-- END NEWS SHARE -->
                  </div>
                </div>
                <!-- END MODALBOX NEWS -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End second modal -->
      </li>
      <!-- End single blog -->

      <li>
        <div class="list_inner">
          <div class="image" @click="showModal2">
            <img src="../assets/img/thumbs/4-3.jpg" alt="thumb" />
            <div
              class="main"
              :style="{ backgroundImage: 'url(' + src2 + ')' }"
            ></div>
          </div>
          <!-- End .image -->
          <div class="details">
            <div class="extra">
              <p class="date">
                By <a href="#">Brook Kennedy</a><span>22 March 2021</span>
              </p>
            </div>
            <!-- End meta info -->
            <h3 class="title" @click="showModal2">
              Sony announced two new full frame cameras with zero fanfare
            </h3>
            <div class="tokyo_tm_read_more" @click="showModal2">
              <a><span>Read More</span></a>
            </div>
          </div>
          <!-- End .details -->
        </div>

        <!-- Start second modal -->
        <transition name="fade">
          <!-- Modal -->
          <div
            :class="{ 'modal-mask': isActive2 }"
            id="modal"
            @click="closeModal2"
            v-if="isVisible2"
          >
            <div
              class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user"
              @click.stop
            >
              <div class="modal-content">
                <div class="tokyo_tm_modalbox_news">
                  <div class="close" @click="closeModal2">
                    <img
                      class="svg"
                      src="../assets/img/svg/cancel.svg"
                      alt="cancel-img"
                    />
                  </div>
                  <!-- END CLOSE ICON -->
                  <div class="image">
                    <img src="../assets/img/thumbs/4-3.jpg" alt="tumb" />
                    <div
                      class="main"
                      :style="{ backgroundImage: 'url(' + popup2 + ')' }"
                    ></div>
                  </div>
                  <!-- END IMAGE-->
                  <div class="details">
                    <div class="extra">
                      <p class="date">
                        By <a href="#">Brook Kennedy</a
                        ><span>22 March 2021</span>
                      </p>
                    </div>
                    <h3 class="title">
                      Sony announced two new full frame cameras with zero
                      fanfare
                    </h3>
                  </div>
                  <!-- END DETAILS -->
                  <div class="main_content ">
                    <div class="descriptions">
                      <p class="bigger">
                        Just because we can't get out and about like we normally
                        would, doesn’t mean we have to stop taking pictures.
                        There’s still plenty you can do, provided you're
                        prepared to use some imagination. Here are a few ideas
                        to keep you shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now so
                        we can remember them when it is all over.
                      </p>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
                      </p>
                      <div class="quotebox">
                        <div class="icon">
                          <img
                            class="svg"
                            src="../assets/img/svg/quote.svg"
                            alt="tumb"
                          />
                        </div>
                        <p>
                          Most photographers find it hard to see interesting
                          pictures in places in which they are most familiar. A
                          trip somewhere new seems always exactly what our
                          photography needed, as shooting away from home
                          consistently inspires us to new artistic heights.
                        </p>
                      </div>
                      <!-- END QUOTEBOX -->
                      <p>
                        Pretend everything is new and that you haven’t seen it
                        before, and then you will be free to notice the leading
                        lines, the places where one edge meets another in
                        delightful geometric harmony, and how the ordinary
                        things in the kitchen are transformed when the light is
                        on or off.
                      </p>
                      <p>
                        The trick here is to look slowly, and then look again.
                        Take the time to look in detail and to look at the same
                        thing from different angles, with different light, long
                        lenses and wide lenses. Then move to the left a bit. You
                        may never feel the need to leave the house again.
                      </p>
                    </div>
                    <!-- END DESCRIPTION -->
                    <div class="news_share">
                      <span>Share:</span>
                      <Social />
                      <!-- END SOCIAL SHARE -->
                    </div>
                    <!-- END NEWS SHARE -->
                  </div>
                </div>
                <!-- END MODALBOX NEWS -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End Second Modal -->
      </li>
      <!-- End single blog -->

      <li>
        <div class="list_inner">
          <div class="image" @click="showModal3">
            <img src="../assets/img/thumbs/4-3.jpg" alt="thumb" />
            <div
              class="main"
              :style="{ backgroundImage: 'url(' + src3 + ')' }"
            ></div>
          </div>
          <!-- End .image -->
          <div class="details">
            <div class="extra">
              <p class="date">
                By <a href="#">Paola Atkins</a><span>15 Feb 2021</span>
              </p>
            </div>
            <h3 class="title" @click="showModal3">
              Why every photographer should shoot film, even in 2021
            </h3>
            <div class="tokyo_tm_read_more" @click="showModal3">
              <a><span>Read More</span></a>
            </div>
          </div>
          <!-- End .details -->
        </div>

        <!-- Start third modal -->
        <transition name="fade">
          <!-- Modal -->
          <div
            :class="{ 'modal-mask': isActive3 }"
            id="modal"
            @click="closeModal3"
            v-if="isVisible3"
          >
            <div
              class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user"
              @click.stop
            >
              <div class="modal-content">
                <div class="tokyo_tm_modalbox_news">
                  <div class="close" @click="closeModal3">
                    <img
                      class="svg"
                      src="../assets/img/svg/cancel.svg"
                      alt="cancel-img"
                    />
                  </div>
                  <!-- END CLOSE ICON -->
                  <div class="image">
                    <img src="../assets/img/thumbs/4-3.jpg" alt="tumb" />
                    <div
                      class="main"
                      :style="{ backgroundImage: 'url(' + popup3 + ')' }"
                    ></div>
                  </div>
                  <!-- END IMAGE-->
                  <div class="details">
                    <div class="extra">
                      <p class="date">
                        By <a href="#">Paola Atkins</a><span>15 Feb 2021</span>
                      </p>
                    </div>
                    <h3 class="title">
                      Why every photographer should shoot film, even in 2021
                    </h3>
                  </div>
                  <!-- END DETAILS -->
                  <div class="main_content ">
                    <div class="descriptions">
                      <p class="bigger">
                        Just because we can't get out and about like we normally
                        would, doesn’t mean we have to stop taking pictures.
                        There’s still plenty you can do, provided you're
                        prepared to use some imagination. Here are a few ideas
                        to keep you shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now so
                        we can remember them when it is all over.
                      </p>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
                      </p>
                      <div class="quotebox">
                        <div class="icon">
                          <img
                            class="svg"
                            src="../assets/img/svg/quote.svg"
                            alt="tumb"
                          />
                        </div>
                        <p>
                          Most photographers find it hard to see interesting
                          pictures in places in which they are most familiar. A
                          trip somewhere new seems always exactly what our
                          photography needed, as shooting away from home
                          consistently inspires us to new artistic heights.
                        </p>
                      </div>
                      <!-- END QUOTEBOX -->
                      <p>
                        Pretend everything is new and that you haven’t seen it
                        before, and then you will be free to notice the leading
                        lines, the places where one edge meets another in
                        delightful geometric harmony, and how the ordinary
                        things in the kitchen are transformed when the light is
                        on or off.
                      </p>
                      <p>
                        The trick here is to look slowly, and then look again.
                        Take the time to look in detail and to look at the same
                        thing from different angles, with different light, long
                        lenses and wide lenses. Then move to the left a bit. You
                        may never feel the need to leave the house again.
                      </p>
                    </div>
                    <!-- END DESCRIPTION -->
                    <div class="news_share">
                      <span>Share:</span>
                      <Social />
                      <!-- END SOCIAL SHARE -->
                    </div>
                    <!-- END NEWS SHARE -->
                  </div>
                </div>
                <!-- END MODALBOX NEWS -->
              </div>
            </div>
          </div>
        </transition>
        <!-- End third modal -->
      </li>
      <!-- End single blog -->

      <li>
        <div class="list_inner">
          <div class="image" @click="showModal4">
            <img src="../assets/img/thumbs/4-3.jpg" alt="thumb" />
            <div
              class="main"
              :style="{ backgroundImage: 'url(' + src4 + ')' }"
            ></div>
          </div>
          <div class="details">
            <div class="extra">
              <p class="date">
                By <a href="#">Kevin Stone</a><span>22 Jan 2021</span>
              </p>
            </div>
            <h3 class="title" @click="showModal4">
              Stay creative in lockdown with these fun photo projects
            </h3>
            <div class="tokyo_tm_read_more" @click="showModal4">
              <a><span>Read More</span></a>
            </div>
          </div>
        </div>

        <!-- START FOURTH MODAL -->
        <transition name="fade">
          <!-- Modal -->
          <div
            :class="{ 'modal-mask': isActive4 }"
            id="modal"
            @click="closeModal4"
            v-if="isVisible4"
          >
            <div
              class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user"
              @click.stop
            >
              <div class="modal-content">
                <div class="tokyo_tm_modalbox_news">
                  <div class="close" @click="closeModal4">
                    <img
                      class="svg"
                      src="../assets/img/svg/cancel.svg"
                      alt="cancel-img"
                    />
                  </div>
                  <!-- END CLOSE ICON -->
                  <div class="image">
                    <img src="../assets/img/thumbs/4-3.jpg" alt="tumb" />
                    <div
                      class="main"
                      :style="{ backgroundImage: 'url(' + popup4 + ')' }"
                    ></div>
                  </div>
                  <!-- END IMAGE-->
                  <div class="details">
                    <div class="extra">
                      <p class="date">
                        By <a href="#">Kevin Stone</a><span>22 Jan 2021</span>
                      </p>
                    </div>
                    <h3 class="title">
                      Stay creative in lockdown with these fun photo projects
                    </h3>
                  </div>
                  <!-- END DETAILS -->
                  <div class="main_content ">
                    <div class="descriptions">
                      <p class="bigger">
                        Just because we can't get out and about like we normally
                        would, doesn’t mean we have to stop taking pictures.
                        There’s still plenty you can do, provided you're
                        prepared to use some imagination. Here are a few ideas
                        to keep you shooting until normal life resumes.
                      </p>
                      <p>
                        Most photographers love to shoot the unusual, and you
                        don’t get much more unusual than These Unprecedented
                        Times. Right now everything counts as out of the
                        ordinary. There are a number of remarkable things about
                        these lockdown days that are worth photographing now so
                        we can remember them when it is all over.
                      </p>
                      <p>
                        Streets empty that are usually busy are remarkable and
                        can evoke the sense of historical pictures from before
                        the invention of the motorcar. Other things that are
                        different at the moment will be queues to get into
                        stores and the lines marked out on the floor to show how
                        far apart we should be.
                      </p>
                      <div class="quotebox">
                        <div class="icon">
                          <img
                            class="svg"
                            src="../assets/img/svg/quote.svg"
                            alt="tumb"
                          />
                        </div>
                        <p>
                          Most photographers find it hard to see interesting
                          pictures in places in which they are most familiar. A
                          trip somewhere new seems always exactly what our
                          photography needed, as shooting away from home
                          consistently inspires us to new artistic heights.
                        </p>
                      </div>
                      <!-- END QUOTEBOX -->
                      <p>
                        Pretend everything is new and that you haven’t seen it
                        before, and then you will be free to notice the leading
                        lines, the places where one edge meets another in
                        delightful geometric harmony, and how the ordinary
                        things in the kitchen are transformed when the light is
                        on or off.
                      </p>
                      <p>
                        The trick here is to look slowly, and then look again.
                        Take the time to look in detail and to look at the same
                        thing from different angles, with different light, long
                        lenses and wide lenses. Then move to the left a bit. You
                        may never feel the need to leave the house again.
                      </p>
                    </div>
                    <!-- END DESCRIPTION -->
                    <div class="news_share">
                      <span>Share:</span>
                      <Social />
                      <!-- END SOCIAL SHARE -->
                    </div>
                    <!-- END NEWS SHARE -->
                  </div>
                </div>
                <!-- END MODALBOX NEWS -->
              </div>
            </div>
          </div>
        </transition>
        <!-- END SECOND MODAL -->
      </li>
      <!-- End single blog -->
    </ul>
  </div>
</template>

<script>
import Social from "../components/Social";
export default {
  components: {
    Social,
  },
  data() {
    return {
      isActive: false,
      isActive2: false,
      isActive3: false,
      isActive4: false,
      src1: require("../assets/img/news/1.jpg"),
      src2: require("../assets/img/news/2.jpg"),
      src3: require("../assets/img/news/3.jpg"),
      src4: require("../assets/img/news/4.jpg"),
      popup1: require("../assets/img/news/1.jpg"),
      popup2: require("../assets/img/news/2.jpg"),
      popup3: require("../assets/img/news/3.jpg"),
      popup4: require("../assets/img/news/4.jpg"),

      isVisible: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
    };
  },
  methods: {
    showModal: function() {
      this.isActive = true;
      this.isVisible = true;
    },
    showModal2: function() {
      this.isActive2 = true;
      this.isVisible2 = true;
    },
    showModal3: function() {
      this.isActive3 = true;
      this.isVisible3 = true;
    },
    showModal4: function() {
      this.isActive4 = true;
      this.isVisible4 = true;
    },
    closeModal: function() {
      this.isActive = false;
      this.isVisible = false;
    },
    closeModal2: function() {
      this.isActive2 = false;
      this.isVisible2 = false;
    },
    closeModal3: function() {
      this.isActive3 = false;
      this.isVisible3 = false;
    },
    closeModal4: function() {
      this.isActive4 = false;
      this.isVisible4 = false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
