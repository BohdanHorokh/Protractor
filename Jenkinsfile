pipeline {
    agent {
        docker { 
            image 'node:7-alpine' 
             args '-p 3000:3000' 
        }
    }

    stages {
        stage('Build') {
            steps {
                sh 'npm install -g npm@latest'
                sh 'protractor --version'
            }
        }
        stage('Test') {
            steps {
                sh 'protractor --version'
                sh 'protractor ./configs/conf.js'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         echo 'Deploying....'
        //     }
        // }
    }
}