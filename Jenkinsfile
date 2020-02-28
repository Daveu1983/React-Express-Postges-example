node {
    def app
    stage('Clone repo'){
        checkout scm
    }

    stage('build') {
        sh script:'''
        #!/bin/bash
        cd ./backend
        npm install --quiet
        '''
    }
    stage('test') {
        sh script:'''
        #!/bin/bash
        cd ./backend
        npm test
        '''
    }
    stage('Docker Build') {
        sh script:'''
        #!/bin/bash
        cd ./backend
        pwd
        '''
        app = docker.build("back", "-f ./backend/Dockerfile .")
    }
    stage ('Docker run') {
     sh script:'''
     #!/bin/bash
     docker run -it back
     '''
    }
    
}
