pipeline {
    agent {docker 'node:12-alpine'}
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
                sh script:'''
                #!/bin/bash
                cd ./backend
                docker build -t back ./backend
                '''
            }
        }
        stage ('Docker run') {
            container('docker') {
                sh script:'''
                #!bin/bash
                docker run -p 8000:8000 back
                '''
            }
        }
    }
}