node {
    def app
    stages {
        stage('Clone repo'){
            checkout scm
        }

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
            sh script:'''
            #!/bin/bash
            cd ./backend
            '''
            app =  docker.build("back")
        }
        // stage ('Docker run') {
        //     container('docker') {
        //         docker run -p 8000:8000 back
        //     }
        // }
    }
}