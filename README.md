<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Lakshay Handa - GitHub Profile</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #0d1117;
            color: #c9d1d9;
            text-align: center;
            padding: 20px;
        }
        h1 {
            color: #58a6ff;
        }
        .container {
            max-width: 900px;
            margin: auto;
            padding: 20px;
            background-color: #161b22;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.1);
        }
        .badge {
            display: inline-block;
            margin: 5px;
        }
        .projects, .contact {
            text-align: left;
            margin-top: 20px;
        }
        .typing {
            font-size: 1.5rem;
            color: #58a6ff;
        }
    </style>
    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const text = [
                "Welcome to my GitHub Profile!",
                "Aspiring Data Scientist from Delhi University",
                "Exploring the world of Data Science and AI!"
            ];
            let i = 0;
            let j = 0;
            let currentText = "";
            let isDeleting = false;
            const speed = 100;

            function typeEffect() {
                if (isDeleting) {
                    currentText = text[i].substring(0, j--);
                } else {
                    currentText = text[i].substring(0, j++);
                }
                document.getElementById("typing").innerText = currentText;
                if (!isDeleting && j === text[i].length) {
                    isDeleting = true;
                    setTimeout(typeEffect, 1500);
                } else if (isDeleting && j === 0) {
                    isDeleting = false;
                    i = (i + 1) % text.length;
                }
                setTimeout(typeEffect, speed);
            }
            typeEffect();
        });
    </script>
</head>
<body>
    <div class="container">
        <h1>Hi there, I'm Lakshay 👋</h1>
        <p class="typing" id="typing"></p>
        <p><i>Aspiring Data Scientist • Machine Learning Enthusiast • Python • Founder @ FromScratch Analytics • Intern @ Prodigy Infotech</i></p>
        <hr>

        <h2>👨‍💻 About Me:</h2>
        <p>📘 Studying <b>Commerce Honours</b> at <b>Delhi University</b></p>
        <p>💡 Passionate about <b>Data Science, Deep Learning & AI</b></p>
        <p>💬 Ask me about <b>Python, Machine Learning, Deep Learning, and Poetry</b></p>
        
        <h2>🔧 Technologies & Tools:</h2>
        <p>
            <img class="badge" src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"/>
            <img class="badge" src="https://img.shields.io/badge/Scikit_Learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white"/>
            <img class="badge" src="https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white"/>
            <img class="badge" src="https://img.shields.io/badge/Numpy-013243?style=for-the-badge&logo=numpy&logoColor=white"/>
            <img class="badge" src="https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"/>
            <img class="badge" src="https://img.shields.io/badge/Keras-D00000?style=for-the-badge&logo=keras&logoColor=white"/>
        </p>

        <h2>📈 GitHub Stats:</h2>
        <p>
            <img height="150em" src="https://github-readme-stats.vercel.app/api?username=lakshayknows&show_icons=true&hide_border=true&count_private=true&theme=radical" />
            <img height="150em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=lakshayknows&exclude_repo=PortfolioSite&show_icons=true&hide_border=true&layout=compact&langs_count=8&theme=radical" />
        </p>

        <h2>🌟 My Projects:</h2>
        <div class="projects">
            <ul>
                <li><a href="https://github.com/lakshayknows/ds_prodigy_infotech/tree/task-3">Decision Tree Classifier - PCA and Model Evaluation</a></li>
                <li><a href="https://github.com/lakshayknows/loan-approval-prediction">Loan Approval Prediction</a></li>
                <li><a href="https://github.com/lakshayknows/Student_Performance">Student Performance Analysis</a></li>
            </ul>
        </div>

        <h2>💬 Connect with Me:</h2>
        <p>
            <a href="https://www.linkedin.com/in/lakshayhanda"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
            <a href="mailto:connect.lakshay@outlook.com"><img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/></a>
        </p>
    </div>
</body>
</html>
