pipeline {
    agent {
        docker { 
            image 'node:6-alpine' 
             args '-p 3000:3000' 
        }
    }

    stages {
        stage('check tools') {
                sh "node -v"
                sh "npm -v"
            }

        stage('Build') {
            steps {
                sh 'npm test'
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