# semicolon_SAHAJ-Health-tech-
# 🩺 Sahaj: AI & IOT Powered Rural Healthcare Platform

Sahaj is a unified healthcare platform that leverages AI and IoT to provide early disease prediction, health monitoring, and telemedicine services—specifically designed for underserved and rural communities.

---



---

## ✨ Features

- ✅ AI-based prediction for *lung cancer, **breast cancer, **skin, **eye, and **oral health* disorders via image upload.
- ✅ *IoT integration* to monitor live *heart rate* and *SpO2*.
- ✅ *Doctor filtering* by specialization & *video consultations*.
- ✅ *E-prescription, **appointment history, and **medical record tracking*.
- ✅ Separate dashboards for *patients* and *doctors*.

---

## 🛠 Tech Stack

### 🌐 Frontend
- React.js (User Interface)
- Tailwind CSS / Bootstrap (Styling)

### 🔧 Backend
- Node.js + Express.js
- MongoDB (Database)

### 🤖 Machine Learning
- Python, TensorFlow/Keras
- Flask APIs for AI predictions

### 📟 IoT Integration
- ESP32 Microcontroller
- Heart Rate & SpO2 Sensors

### 📞 Telemedicine
- WebRTC / Jitsi Meet / PeerJS (for video calling)

---

## 📁 Folder Structure

SAHAJ/
├── Backend/
│   ├── models/
│   │   └── user.js
│   ├── node_modules/
│   ├── views/
│   │   ├── create.ejs
│   │   ├── index.ejs
│   │   └── login.ejs
│   ├── app.js
│   ├── package.json
│   └── package-lock.json
├── Frontend/
│   ├── node_modules/
│   ├── prescripto_assets/
│   │   ├── assets/
│   │   ├── assets_admin/
│   │   └── assets_frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   │   └── AppContext.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── AIAssistant.jsx
│   │   │   ├── AIHome.jsx
│   │   │   ├── Appointments.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Doctors.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── InteractionPage.jsx
│   │   │   ├── IOT.jsx
│   │   │   ├── IOT.jsx.backup
│   │   │   ├── IOT.jsx.new
│   │   │   ├── Login.jsx
│   │   │   ├── MedicalHistory.jsx
│   │   │   ├── MyAppointments.jsx
│   │   │   ├── MyProfile.jsx
│   │   │   ├── NewFeatures.jsx
│   │   │   └── Signup.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
└── Stars of GreatStack.pdf


---
---
# 🧠 MedSight AI

**MedSight AI** is a deep learning-based medical diagnostic tool that analyzes CT scan images of the **lungs**, **breast**, and **brain** to detect cancer and predict its severity. It generates **Grad-CAM heatmaps** for infected areas and offers personalized **Do’s and Don’ts** based on the predicted **malignancy score** (ranging from 1 to 5).

> ⚠️ This tool requires a CUDA-enabled **GPU** with **at least 8GB VRAM**. It does **not** support CPU-only systems.
> 
 ## ⚠️ Important: This repository does not include the pretrained models due to file size limits.
---

## 📦 Download Pretrained Model

To run predictions, download the pretrained model from the link below and place it in the project directory (as specified in the code):

👉 **[Download MedSight AI Model](https://drive.google.com/file/d/1aMIaqdRjTF0iCe_Hpq3gh1KPoldluu32/view?usp=sharing)**

---

## 🖼️ Demo

<p align="center">
  <img src="Screenshot 2025-05-28 114215.png" width="45%" title="Original and Heatmap CT Scan"/>
</p>

<p align="center">
  <img src="Screenshot 2025-05-28 114231.png" width="80%" title="Prediction and Suggestions"/>
</p>

---

## 🚀 Features

- ✅ Detects presence and severity of cancer (malignancy score: 1–5)
- 🔥 Grad-CAM heatmaps highlight the infected regions
- 🩺 Offers personalized Do’s and Don’ts based on malignancy stage
- 🫁 Fine-tuned on **LIDC-IDRI** (lung cancer CT dataset)
- 💻 User-friendly **Streamlit** web interface
- 🧠 Based on the pretrained **MedViT** architecture

---

## 📂 Input Format

- Upload .jpg, .jpeg, or .png files
- Best results with .jpg lung CT scan images

---

## 🧠 Malignancy Score Scale

| Score | Description                  |
|-------|------------------------------|
| 1     | No signs of cancer           |
| 2     | Low suspicion                |
| 3     | Indeterminate                |
| 4     | Moderately likely cancer     |
| 5     | Highly likely / serious case |

---

## 💡 Sample Prediction Output

**Class: 1 (No signs of cancer)**  
- ✅ Lungs appear healthy and clear  
- ❌ No abnormal growths or spots  
- 🛑 No treatment or follow-up required  
- 🗓️ Keep up with routine annual check-ups  

> ✔️ **Analysis Complete** — Please consult a medical professional for further evaluation.

---

## ⚙️ How to Use
⚠️ Important: This repository does not include the pretrained models due to file size limits.
### 1️⃣ Recommended: Download Full Project Folder
👉 **[Download MedSight AI Project Folder (includes code + trained model)](https://drive.google.com/file/d/1aMIaqdRjTF0iCe_Hpq3gh1KPoldluu32/view?usp=sharing)**  
Unzip it and open in your editor (e.g., VS Code).

---

### 2️⃣ Optional: Clone the Repository

If you prefer GitHub, clone the repository:

```bash
git clone https://github.com/shubh03210/MedSight-AI.git
cd Sahaj---AI-IOT-powered-healthcare-platform

```


You must manually download:

🔗 MedSight-AI trained model:
**[Download MedSight Model+weights](https://drive.google.com/file/d/1aMIaqdRjTF0iCe_Hpq3gh1KPoldluu32/view?usp=sharing)**

🔗 MedViT pretrained weights:
**[Download MedVit pretrained Weights](https://drive.google.com/file/d/1rHO73fr3tY4NG3HQdkXhK564SZFpvQM-/view?usp=sharing)**


📁 After downloading, place the files in the correct directories as mentioned in the code.

---
### Install dependencies:
```bash
pip install -r requirements.txt
```
---
### Launch the Streamlit app:
```bash
streamlit run app.py
```
---
### Upload a .jpg CT scan and view:

✅ Grad-CAM heatmap

✅ Malignancy score (1–5)

✅ Health recommendations

---
## 📦 Dependencies
```bash
torch==2.5.1+cu121

torchvision==0.20.1+cu121

torchaudio==2.5.1+cu121

timm==1.0.15

grad-cam==1.5.5

numpy==1.26.4

pillow==11.2.1

matplotlib==3.10.1

opencv-python==4.11.0.86
```
---
## 💻 Hardware Requirements
✅ NVIDIA GPU (CUDA-enabled)

✅ Minimum 8GB GPU memory

❌ Not supported on CPU-only environments

---
## 📄 License
Currently, there is no license applied.
Please contact the repository owner before reuse.

---
## 🙏 Acknowledgements
Pretrained Model: MedViT

Dataset: LIDC-IDRI (Lung Cancer)

Thanks to the open-source community for essential libraries and tools

---
## ⚠️ Disclaimer
This tool is intended for research and educational purposes only.
It is not a substitute for professional medical advice or diagnosis.
Always consult a certified radiologist or physician for medical concerns.

