# Proper Installation / Run Commands

1. Open up a seperate terminal instance in your text editor
2. cd to the server directory
3. Verify that you have python3 installed on your machine (`python3 --version`) if Mac or `python` if Windows. If not, install it.
4. Create a virtual environment for this project using `python3 -m venv env` if Mac or `python -m venv env` if Windows inside the directory
5. Activate the virtual environment using the command `source env/bin/activate` if Mac or `env\Scripts\activate` if Windows
6. Install our current dependencies using the command `pip3 install -r requirements.txt` if Mac or `pip install -r requirements.txt` if Windows
7. (Unix) Run the command `chmod u+x start.sh`. (Windows) Execute `.\setEnvVars.bat`
8. (Unix) Execute `./start.sh` to start the application. (Windows) Execute the command `flask run -h localhost -p 4000` to start the application.

Navigate to http://localhost:4000/index. If you see a JSON response stating that Todo app is running, you have successfully setup the project correctly.
