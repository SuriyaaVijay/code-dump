#Imporitng libraries
import pandas as pd
import numpy as np
import streamlit as st
from streamlit_option_menu import option_menu
import matplotlib.pyplot as plt
import plotly as px
import plotly.figure_factory as ff



def app():
    #Reading csv file
    auto_data = pd.read_csv('database/Customer Segment Data.csv')

    #Title and header
    st.title("Customer Segmentation Analysis")
    st.header("Know your customers")


    #Content
    st.markdown("""
    <style>
    .big-font {
        font-size:20px !important;
    }
    </style>
    """, unsafe_allow_html=True)
    st.markdown('<p class="big-font">- Car buyers spend 59% of their time online researching.</p>' ,  unsafe_allow_html=True)
    st.markdown('<p class="big-font">- When researching online, 46% of car shoppers use multiple devices.</p>' ,  unsafe_allow_html=True)
    st.markdown('<p class="big-font">- Most car buyers are undecided at the start of the shopping process. When they first begin to shop, 6 out of 10, them are open to considering multiple vehicle options.</p>' ,  unsafe_allow_html=True)
    st.markdown('<p class="big-font">- Third-party sites are the most used sites for car shopping, used by 78% of shoppers.</p>' ,  unsafe_allow_html=True)
    st.markdown('<p class="big-font">- Walking in remains the common form of initial contact with a dealership by more than half of car shoppers.</p>' ,  unsafe_allow_html=True)
    
    st.header("Indian consumers root more for mileage than engine power.")

    st.markdown('<p class="big-font">Here we have shown the behavioral patterns of Indian customers</p>' ,  unsafe_allow_html=True)


    #Sidebar
    with st.sidebar:
        selected = option_menu(
            menu_title="Autolysis" ,
            options=["Four Wheeler", "Two Wheeler" , "Potential customers" , "Electric Vehicles", "Car Emission"],
        )

    # Bar chart of the number of cars vs count of cars
    st.subheader("Car Sales Analysis")
    st.caption("This chart represents the number of cars available in our dataset. SUVs and Baleno are a few top selling cars according to the dataset")
    makes = (auto_data["Car Type"].value_counts()).to_frame();
    st.bar_chart(makes)

    # Indexing on the bases of Car types
    st.subheader("Age groups")
    st.caption("The below scatter plot represents the interest of the age groups in the various cars present in the dataset. Not only does it shows the young age group in the dataset, it also shows the choice trend of the vehicle type amongst the young generation.")

    fig = plt.figure()
    ax = fig.add_subplot(1,1,1)
    ax.scatter(
        auto_data["Car Type"],
        auto_data["Age"],
    )
    ax.set_ylabel("Age Group")
    ax.set_xlabel("Car Name")
    st.write(fig)


    auto_data.set_index("Car Type", inplace = True)


    st.subheader("Pre-Existing Loans")
    st.caption("This shows that a major segment of the people are not bounded under any personal or home loan, which might make them eligible for an easy approval for a vehicle loan.")

    labels_home = auto_data['House Loan'].value_counts().to_dict().keys()
    sizes_home = auto_data['House Loan'].value_counts().to_dict().values()

    col1, col2 = st.columns(2)
    fig_home, ax_home = plt.subplots(figsize=(3, 3))
    ax_home.pie(sizes_home, labels=labels_home, autopct='%1.1f%%',
                shadow=True, startangle=90)
    ax_home.axis('equal') 

    #Personal Loans
    labels_personal = auto_data['Personal loan'].value_counts().to_dict().keys()
    sizes_personal = auto_data['Personal loan'].value_counts().to_dict().values()
    fig_personal, ax_personal = plt.subplots(figsize=(3, 3))
    ax_personal.pie(sizes_personal, labels=labels_personal, autopct='%1.1f%%',
                shadow=True, startangle=90)
    ax_personal.axis('equal') 
    with col1:
        st.write("Home Loans")
        st.pyplot(fig_home)
    with col2:
        st.write("Personal Loans")
        st.pyplot(fig_personal)


    #Analysing dependents of the car buyers
    st.subheader("Number of Dependents")
    st.caption("The above pie chart represents the number of dependents relying on the individual. Obviously, choice of the individual while getting a vehicle would change according to the number of dependents relying over him/her")
    col1 , col2 = st.columns(2)
    labels = auto_data['No of Dependents'].value_counts().to_dict().keys()
    sizes = auto_data['No of Dependents'].value_counts().to_dict().values()
    fig1, ax1 = plt.subplots()
    ax1.pie(sizes, labels=labels, autopct='%1.1f%%',
                shadow=True, startangle=90)
    ax1.axis('equal') 
    with col1:
        st.pyplot(fig1)
    

    #Analysing buyer's salary
    st.subheader("Salary vs Wife Salary")
    st.caption("This bargraph which compares the salary of the couple with respect to the car they bought helps us to analyse the choice of the couple dependent on the salary share of the two")
    st.bar_chart(auto_data[["Salary" , "Wife Salary"]])
    fig = plt.figure()
    ax = fig.add_subplot(1,1,1)


    #Analysing women workforce
    st.subheader("Scatter Plots for Wife Working")
    ax.scatter(
        auto_data["Wife Working"],
        auto_data["Price"],
    )
    ax.set_ylabel("Ex-Showroom Price")
    ax.set_xlabel("Wife Working")
    st.caption("This scatter plot shows the relation between the price of the prefered vehicle and employment status of the other half, whether working or non-working. Clearly, the price range increases when the other halves of the individual are employed")
    st.write(fig)


    #Analysing price of the car and total salary of the customer
    st.subheader("Price vs Total Salary")
    st.caption("This graph shows the relation between the total salary of the couple and the price of the vehicle they chose. It gives us an idea that the total salary produces an impact on the choice of the vehicle")
    st.bar_chart(auto_data[['Price' , 'Total Salary']])