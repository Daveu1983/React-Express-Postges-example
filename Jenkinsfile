pipeline {
    agent any
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
    }
}