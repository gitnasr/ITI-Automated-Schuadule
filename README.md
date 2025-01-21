<img src="https://github.com/user-attachments/assets/1eb57988-db53-4dd5-a23d-189deda75de3" alt="iti" width="64" />  

# The Automated ITI Schedule


A lightweight web service designed to fetch the schedule of ITI PWD Intake 45 from Google Sheets and parse it using a custom algorithm, making the schedule easily accessible and user-friendly.  

## Motivation  
Personally, I find Google Sheets cumbersome to use, especially on my phone, as it offers a very limited view. The schedules are often large and overly detailed, but as students, we mostly care about the current day's schedule or what's planned for tomorrow.  

So, why not create a simple web service to solve this problem?  

## Technologies  

- **Next.js** with Server Actions and PWA support  
- **Moment.js** for date handling  
- **TailwindCSS** for sleek and modern styling  

## The Output  

![screenshot](https://github.com/user-attachments/assets/6e40449d-4144-42d6-a0cf-34581648f6a4)  

![](https://img.shields.io/badge/next.js-fff?style=for-the-badge&logo=nextdotjs&logoColor=black)  

## API Endpoint  
Thanks to Next.js Server Actions, I’ve created an endpoint `/api/automated` to access the schedule data via an API. This is particularly useful because I plan to develop a WhatsApp bot that sends notifications whenever the schedule is updated!  
