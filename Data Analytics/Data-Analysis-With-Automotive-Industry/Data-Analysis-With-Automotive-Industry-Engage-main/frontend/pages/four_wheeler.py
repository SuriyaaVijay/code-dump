from multiprocessing import dummy
from pyexpat import features
from matplotlib.ft2font import HORIZONTAL, VERTICAL
from sqlalchemy import column
import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from streamlit_option_menu import option_menu
from PIL import Image

def app():
    
    st.title("Data Analysis In The Field of Automotive Industry")
    st.subheader("Are you planning to launch a new vehicle or open your own automobile venture? Renowned automobile industries are using the power of data analytics to improvise their sales, make informed decisions and take customer's concern and needs into account")
    st.write("Every automobile maker releases various models, checkout some of the renowned ones")

    
    auto_data = pd.read_csv("database/Car_Features_Data.csv")

    #Select company 
    make = st.selectbox('Choose your company name' , auto_data["Make"].unique())
    company_data = auto_data[['Model' , 'Variant' , 'Ex-Showroom_Price']].where(auto_data['Make'] == make).dropna();

   
    #Select car
    model = st.selectbox('Choose your car name' , company_data["Model"].unique())
    variant_data = company_data[['Variant' , 'Ex-Showroom_Price']].where(company_data['Model'] == model).dropna();

    #Select variant
    variant = st.selectbox('Choose your variant name' , variant_data['Variant'].unique())

    #Price display
    price_data = variant_data['Ex-Showroom_Price'].where(variant_data['Variant'] == variant).dropna()
    st.header("Car Price")
    st.write(price_data)

    #Buttons spacing
    st.text("")
    specifications , features , safety = st.columns(3)
    entertainment , interior , dummy = st.columns(3)

    #Select buttons
    with specifications:
        specifications_button = st.button('Specifications')

    with features:
        features_button = st.button('Features')

    with safety:
        safety_button = st.button('Safety')

    with entertainment:
        entertainment_button = st.button('Entertainment')

    with interior:
        interior_button = st.button('Interior')
    

    if specifications_button:
        st.title("Specifications")

        #Car dimensions
        st.subheader("Car Dimensions")
        st.write(auto_data[['Length' , 'Width' , 'Height']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        st.write(auto_data[['Wheels_Size' , 'Ground_Clearance']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        st.write(auto_data[['Seating_Capacity' , 'Boot_Space']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        st.write(auto_data[['Front_Track' , 'Rear_Track']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        #Car Weight and Performance
        st.subheader("Car Weight and Performance")
        st.write(auto_data[['Kerb_Weight' , 'Gross_Vehicle_Weight']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        st.write(auto_data['Minimum_Turning_Radius'].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())


        #Mileage
        st.subheader("Mileage")
        st.write(auto_data['Mileage'].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        st.subheader("Emission Norms")
        st.write(auto_data['Emission_Norm'].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())


        #Engine Specifications
        st.subheader("Engine Specifications")
        st.write(auto_data['Displacement'].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        st.write(auto_data[['Power' , 'Torque' , 'Cylinders']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        #Braking Specifications
        st.subheader("Braking Specifications")
        st.write(auto_data[["Front_Brakes" , "Rear_Brakes"]].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())


    #Features button
    if features_button:
        st.title("Features")

        st.subheader("Driver Modes")
        st.write(auto_data['Drive_Modes'].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        
        st.header("Adjustments")
        st.write(auto_data[['Rear_Center_Armrest' , 'Seat_Height_Adjustment']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        st.header("Reminders")
        st.write(auto_data[["Key_Off_Reminder" , "Gear_Shift_Reminder"]].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        st.header("Digital Features")
        st.write(auto_data[['Instrument_Console' , 'Parking_Assistance' , 'Voice_Recognition']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        st.header("Others")
        st.write(auto_data[["Multifunction_Steering_Wheel" , "Cigarette_Lighter"]].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

    #Safety button
    if safety_button:
        st.title("Safety")
        
        st.header("Airbags")
        st.write(auto_data[['Airbags' , 'Number_of_Airbags']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        st.header("Warnings and Controls Systems")
        st.write(auto_data[['High_Speed_Alert_System' , 'ESP_(Electronic_Stability_Program)']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        st.write(auto_data[['Tyre_Pressure_Monitoring_System' , 'Engine_Malfunction_Light']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        st.write(auto_data[['Central_Locking' , 'Passenger_Side_Seat-Belt_Reminder']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        st.write(auto_data['Fasten_Seat_Belt_Warning'].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        st.header("Child Safety")
        st.write(auto_data[['Child_Safety_Locks' , 'ISOFIX_(Child-Seat_Mount)']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        st.header("Brakings")
        st.write(auto_data[["Front_Brakes" , "Rear_Brakes"]].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        st.write(auto_data[['ABS_(Anti-lock_Braking_System)' , 'EBD_(Electronic_Brake-force_Distribution)' , 'EBA_(Electronic_Brake_Assist)']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())


    #Entertainment button
    if entertainment_button:
        st.title("Audio and Entertainment")

        st.header("Systems")
        st.write(auto_data[['Navigation_System' , 'Infotainment_Screen']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        
        st.header("Compatibilities")
        st.write(auto_data[['iPod_Compatibility' , 'FM_Radio' , 'USB_Compatibility']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        
        st.header("Android and Apple")
        st.write(auto_data[['Android_Auto' , 'Apple_CarPlay']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        
    #Interior button
    if interior_button:
        st.title("Interiors")

        st.header("Seats and Windows")
        st.write(auto_data[['Power_Seats' , 'Seats_Material' , 'Power_Windows']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        
        st.header("Utility")
        st.write(auto_data[['Cup_Holders' , 'Door_Pockets' , 'Boot-lid_Opener']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        st.write(auto_data[['Sun_Visor' , 'Door_Pockets']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        st.header("Meters")
        st.write(auto_data[['Odometer' , 'Speedometer' , 'Tachometer']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())
        st.write(auto_data['Average_Fuel_Consumption'].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        st.header("Lighs")
        st.write(auto_data[['Ambient_Lightning' , 'Cargo/Boot_Lights' , 'Welcome_Lights']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

        st.header("Other Features")
        st.write(auto_data[['Start_/_Stop_Button' , '12v_Power_Outlet' , 'Aux-in_Compatibility']].where((auto_data['Make'] == make) & (auto_data['Model'] == model) & (auto_data['Variant'] == variant)).dropna())

    
    hide_dataframe_row_index = """
                <style>
                .column_heading.level0 {display:none}
                .row_heading.level0 {display:none}
                .blank {display:none}
                </style>
                """
    st.markdown(hide_dataframe_row_index, unsafe_allow_html=True)


    #Sidebar
    with st.sidebar:
        selected = option_menu(
            menu_title="Autolysis" ,
            options=["Four Wheeler", "Two Wheeler" , "Potential customers" , "Electric Vehicles", "Car Emission"],
            orientation=HORIZONTAL
        )

