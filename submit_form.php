{\rtf1\ansi\ansicpg1252\cocoartf2759
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 <?php\
if ($_SERVER["REQUEST_METHOD"] == "POST") \{\
    $name = htmlspecialchars($_POST["name"]);\
    $email = htmlspecialchars($_POST["email"]);\
    $message = htmlspecialchars($_POST["message"]);\
\
    $to = "your-email@example.com"; // Change this to your email\
    $subject = "New Contact Form Submission";\
    $headers = "From: " . $email . "\\r\\n" .\
               "Reply-To: " . $email . "\\r\\n" .\
               "Content-Type: text/plain; charset=UTF-8\\r\\n";\
\
    $body = "Name: $name\\nEmail: $email\\n\\nMessage:\\n$message";\
\
    if (mail($to, $subject, $body, $headers)) \{\
        echo "Success! Your message has been sent.";\
    \} else \{\
        echo "Error: Unable to send message.";\
    \}\
\} else \{\
    echo "Invalid request.";\
\}\
?>\
}