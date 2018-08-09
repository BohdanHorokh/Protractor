pipeline {
    agent {
        docker { 
            image 'node:6-alpine' 
             args '-p 3000:3000' 
        }
    }

    stages {
        stage('check tools') {
            steps {
                sh "node -v"
                sh "npm -v"
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
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