pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh script:'''
                #!/bin/bash
                cd ./backend
                ls
                npm install --quiet
                '''
            }
        }
        stage('test') {
            steps {
                sh "npm test"
                sh "cd ../"
            }
        }
    }
}