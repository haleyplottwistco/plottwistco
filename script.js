{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let slideIndex = 0;\
const slides = document.querySelectorAll(".slide");\
\
function showSlides() \{\
    for (let i = 0; i < slides.length; i++) \{\
        slides[i].style.opacity = "0";\
    \}\
    slideIndex++;\
    if (slideIndex > slides.length) \{\
        slideIndex = 1;\
    \}\
    slides[slideIndex - 1].style.opacity = "1";\
    setTimeout(showSlides, 7000); // Change every 7 seconds\
\}\
\
// Start the slideshow\
document.addEventListener("DOMContentLoaded", showSlides);\
}