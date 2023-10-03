#Importing Libraries
from cgitb import enable
from enum import auto
from faulthandler import disable
from cv2 import CAP_PROP_XI_IMAGE_BLACK_LEVEL
from matplotlib.ft2font import HORIZONTAL, VERTICAL
from sqlalchemy import column
import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from streamlit_option_menu import option_menu
import altair as alt
import plotly
from plotly.tools import FigureFactory as ff


def app():
    #Title
    st.title("A shift towards Electric Vehicles")

    #Sidebar
    with st.sidebar:
        selected = option_menu(
            menu_title="Autolysis" ,
            options=["Four Wheeler", "Two Wheeler" , "Potential customers" , "Electric Vehicles", "Safety Norms"],
            orientation=HORIZONTAL
        )

    
    st.markdown("""
    <style>
    .left {
        font-size:15px !important;
        text-align: right;
        font-style: italic;
    }
    </style>
    """, unsafe_allow_html=True)

    st.markdown('<p class="left">Automotive Future is Electric</p>', unsafe_allow_html=True)

    st.markdown("""
    <style>
    .big-font {
        font-size:20px !important;
    }
    </style>
    """, unsafe_allow_html=True)

    st.markdown("""
    <style>
    .bullet {
        font-size:20px !important;
        
    }
    </style>
    """, unsafe_allow_html=True)

    st.markdown('<p class="big-font">EVs have great potential as a way for cities to reduce local air pollution, greenhouse gas emissions and transport sector fossil fuel use. Coupled with renewable energy, EVs can produce zero emissions at the vehicle tailpipe and much lower life-cycle emissions.</p>' ,  unsafe_allow_html=True)
    st.markdown('<p class="big-font">Making a shift to EV easy for the public and private sector is essential to increase uptake. Key strategies cities can take are:</p>' ,  unsafe_allow_html=True)
    st.markdown('<p class="big-font">Build public EV charging infrastructure and encourage other stakeholders to invest.</p>' , unsafe_allow_html=True)
    st.markdown('<p class="big-font">Offer free public parking and priority parking, and consider offering free charging initially.</p>' , unsafe_allow_html=True)
    st.markdown('<p class="big-font">Raise public awareness of the benefits of EVs and dispel common myths.</p>' , unsafe_allow_html=True)


    auto_data = pd.read_csv("database/Electric_Vehicles_India_Clean.csv")


    st.write("Electric Vehicles launched in India")

    choice = st.selectbox('Choose what you want to see' , ['Visualisation' , 'Features'])


    if choice == 'Features':
        st.header("Features")
        make = st.selectbox('Choose your company name' , auto_data["Car"].unique())
        company_data = auto_data[['Car' , 'Style' , 'PriceRange_Low' , 'PriceRange_High']].where(auto_data['Car'] == make).dropna();
        st.write(company_data[['PriceRange_Low' , 'PriceRange_High']])
        st.write(auto_data[['Style' , 'Capacity' , 'Range' , 'BootSpace' , 'BaseModel' , 'TopModel']].where(auto_data['Car'] == make).dropna())
        # st.write(company_data['PriceRange_High'])

    auto_data.set_index("Car", inplace = True)

    if choice == 'Visualisation':
        st.header("Visualisation")

        st.bar_chart(auto_data[['PriceRange_Low' , 'PriceRange_High']])
        st.line_chart(auto_data['Range'])
        st.bar_chart(auto_data['BootSpace'])

    

        labels = auto_data['Style'].value_counts().to_dict().keys()
        sizes = auto_data['Style'].value_counts().to_dict().values()
        
        # explode = (0, 0.1, 0, 0)
        fig1, ax1 = plt.subplots()
        ax1.pie(sizes, labels=labels, autopct='%1.1f%%',
                shadow=True, startangle=90)
        ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.



        


    # CSS to inject contained in a string
    hide_dataframe_row_index = """
                <style>
                .column_heading.level0 {display:none}
                .row_heading.level0 {display:none}
                .blank {display:none}
                </style>
                """

    # Inject CSS with Markdown
    st.markdown(hide_dataframe_row_index, unsafe_allow_html=True)
