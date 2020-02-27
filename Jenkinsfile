pipeline {
    agent { Dockerfile true }
    stages {
        stage('build') {
            steps {
                sh script:'''
                #!/bin/bash
                cd ./backend
                npm install --quiet
                '''
            }
        }
        stage('test') {
            steps {
                sh script:'''
                #!/bin/bash
                cd ./backend
                npm test
                '''
            }
        }
        stage('Docker Build') {
            container('docker') {
                docker build -t back ./backend
            }
        }
        stage ('Docker run') {
            container('docker') {
                docker run -p 8000:8000 back
            }
        }
    }
}