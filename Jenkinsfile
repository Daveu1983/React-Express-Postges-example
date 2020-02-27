pipeline {
    agent none
    stages {
        stage('build') {
            steps {
                sh "npm instal --quiet"
            }
        }
        stage('test') {
            steps {
                sh "npm test"
            }
        }
    }
}