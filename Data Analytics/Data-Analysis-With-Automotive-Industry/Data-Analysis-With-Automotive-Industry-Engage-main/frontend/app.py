# importing required libraries,components
import pandas as pd
import numpy as np
from enum import auto
import streamlit as st
from streamlit_option_menu import option_menu
import matplotlib.pyplot as plt
import plotly as px
import plotly.figure_factory as ff
import streamlit_multipage as multipage
from multipage import MultiPage
from pages import four_wheeler, customer_segment, emission, electric_vehicles, two_wheeler

#Routing of sidebar
app = MultiPage()

app.add_page("Data Analysis", four_wheeler.app)
app.add_page("Customer Segmentation Analysis", customer_segment.app)
app.add_page("Car Emission", emission.app)
app.add_page("Electric Vehicles", electric_vehicles.app)
app.add_page("2 Wheeler Vehicles", two_wheeler.app)

app.run()


