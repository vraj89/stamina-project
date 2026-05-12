# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | [Vaghela-Vraj-Rajeshbhai] |
| **Internship ID** | [PRL-MERN-2026-XXXX] |
| **Date** | [12-05-2026] |
| **Course Day** | [Day-0] |
| **GitHub Repo** | [https://github.com/vraj89/stamina-project] |

---

## 🎯 Daily Objective
*To learn the React with small improvements*


## 🛠️ Implementation & Changes (Self-Documentation)


### 1. New Features / Logic Implemented
- **What:** [show the automatically current time ]
- **How:** [Used JavaScript Date() object with getHours() and conditional logic.]
- **Why:** [To make the UI dynamic and show real-time updates for better user experience.]

### 2. UI/UX Enhancements
- [Added a clean time display section with minimal styling.

Improved props passing for reusable components.

Ensured responsive layout for different screen sizes.]

### 3. Database / Backend Updates
- [Introduced .env variable handling using import.meta.env.VITE_INTERN_NAME.]

---

## 💻 Code Snippet: My Primary Contribution
*Share a critical piece of code or a logic change you implemented today.*

`` stamina logic ``
const [stamina,setStmina]=useState(100);
    const[ctr,setCtr]=useState(0);
    const[isDisabled,setIsDisabled]=useState(false);

    const HandleClick=()=>{
    
         if(stamina<=0){
                setIsDisabled(true);
                return;
         }

        if(ctr<5){
            setStmina(stamina-2);
            setCtr(ctr+1);
        }
        else{
            setStmina(stamina-15)
            setCtr(0);
        }

    }
`` automated time logic``
 const internName = import.meta.env.VITE_INTERN_NAME;
      const hours = new Date().getHours();

      let greeting;

      if(hours >=1 && hours <12){
        greeting = "Good Morning";

      }
      else if(hours >=12 && hours <17){
        greeting ="Good Afternoon";
      }
      else if (hours >=17 && hours <21){
        greeting ="Good Evening";
    }
      else {
         greeting =" Good Night ";
      }

---

## 📸 Screenshots / Proof of Work
*Insert screenshots of your UI, API responses (Postman), or Console logs.*

> **UI Screenshot:**
> ![UI Screenshot](D:\Internship tasks\staminatracker\src\Screen shot implementaion.png)



## 🛑 Challenges Faced & Solutions
*Describe any bugs or blockers you encountered and how you solved them.*

- **Problem:** [1.So many issues i have faced like passing the array props how to do it ?
                 2.implement the logic of .env vaiable 
                 3. showing the current time  ]
- **Solution:** [1. see the examples how to pass props 
                  2. declare the .env variable then used in meta.env.VITE_INTERN_NAME
                  3. use the inbuilt function Date().gethours()  use JS logic like if else ]

---

## 💡 Key Learnings
Props Handling → Passing arrays and reusing components effectively.

Environment Variables → Securely managing sensitive values with .env.

Real-Time Clock → Implementing dynamic UI updates using hooks.

## 🔗 Live Preview (If applicable)
- **Deployment Link:** [http://localhost:3000/]

---
**Signature:**  
*[Vaghela-vraj-Rajeshbhai]*
