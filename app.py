import streamlit as st
from streamlit.components.v1 import declare_component

st.set_page_config(
    page_title="zaiqingchun silver supermarket",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# Serve the static site as a Streamlit custom-component frontend.
# Streamlit serves ./frontend/index.html and its relative assets (css/js/images).
_site = declare_component("silver_supermarket", path="./frontend")

# The frontend calls Streamlit.setFrameHeight() to keep the iframe full-height.
_site()
