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
     docker run -p 8000:8000 --name=back1 -d back
     '''
     input message: 'Finished using the web site? (Click "Proceed" to continue)'
     sh script:'''
     #!/bin/bash
     docker stop back1
     docker rm back1
     '''
    }
}
