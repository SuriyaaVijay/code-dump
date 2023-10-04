import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from streamlit_multipage import MultiPage


def app():

    #Content
    st.title("Indian Two Wheeler Market")
    st.markdown("""
    <style>
    .big-font {
        font-size:20px !important;
    }
    </style>
    """, unsafe_allow_html=True)

    st.markdown('<p class="big-font">Motorcycles, mopeds, scooters, and electric two-wheelers are the most common two-wheelers in India. Two-wheelers are in high demand in India due to their ease of maneuvering around congested roads, reduced carbon emissions, higher fuel efficiency, and ability to provide a cost-effective means of transportation as compared to three or four-wheeled vehicles. In addition, rising urbanization, improved road infrastructure, and an increase in the number of female consumers are boosting two-wheeler demand in India."</p>', unsafe_allow_html=True)
    
    #Reading csv file
    auto_data = pd.read_csv("database/Two Wheeler Data.csv")

    #Calculating bike age
    from datetime import date
    current_year = date.today().year
    auto_data['year'] = current_year - auto_data['year']
    auto_data.rename(columns = {'year':'bike_age'}, inplace = True)


    # Data Visualisation
    st.subheader("Ownership Type")
    st.caption("This barchart shows the ownership type of the motorbikes present in the dataset. Analysing the graph, we can come to a conclusion that the majority of the bikes sold belonged to the primary owner and a lot less 4th and 5th motorbike sales.")
    st.bar_chart(auto_data['owner'].value_counts())

    st.subheader("Ownership vs Selling Price")
    st.caption("This scatter plot between the ownership type and the selling price represents that the sales of the primary and the secondary owner are comparable with the 3rd and 4th ownership type sales being low.")
    fig = plt.figure()
    ax = fig.add_subplot(1,1,1)

    ax.scatter(
        auto_data["owner"],
        auto_data["selling_price"],
    )
    ax.set_ylabel("Selling Price")
    ax.set_xlabel("Ownership Type")
    st.write(fig)

    auto_data.set_index('bike_age', inplace = True)
    st.subheader("Bike Age vs Distance Driven")
    st.caption("This line graph between the bike age and the kilometers driven shows the usage of the bikes, which represents that the very old bikes are not much driven whereas medium aged bikes are the ones which are the ones which are most driven ones.")
    st.bar_chart(auto_data['km_driven'])

    auto_data.set_index('km_driven', inplace = True)
    st.subheader("KMs Driven vs Selling Price")
    st.caption("The below graph shows that the selling price of the motorvehicle decreases as the bike is rided more, which seems pretty obvious.")
    st.line_chart(auto_data['selling_price'])

    st.subheader("Ex-Showroom Price vs Selling Price")
    st.caption("This scatterplot shows the relation between the selling price and the ex-showroom price of the motorvehicle. The plot shows that the selling price and the ex-showroom price are directly propotional to one another.")
    fig = plt.figure()
    ax = fig.add_subplot(1,1,1)
    ax.scatter(
        auto_data["ex_showroom_price"],
        auto_data["selling_price"],
    )
    ax.set_ylabel("Selling Price")
    ax.set_xlabel("Ownership Type")
    st.write(fig)
