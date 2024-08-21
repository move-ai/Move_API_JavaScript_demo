const createFileMutation = `
mutation CreateFile {
    createFile(type: "mp4") {
        id
        presignedUrl
    }
}`

const createTakeMutation = (deviceLabel, fileId, format) => `
mutation CreateTake {
    take: createSingleCamTake(
        sources: [{deviceLabel: "${deviceLabel}", fileId: "${fileId}", format: MP4}]
        ) {
        id
    }
}`

const createJobMutation = (takeId) => `
mutation CreateJob {
    job: createSingleCamJob(takeId: "${takeId}") { 
        id
        metadata
        state
        created
        client {
            id
        }
        take {
            id
        }
        outputs {
            key
            file {
                id
                presignedUrl
            }
        }
    }
}`

const getJobQuery = (jobId) => `
query getJob {
    job: getJob(jobId: "${jobId}") {
        id
        metadata
        state
        created
        client {
            id
        }
        take {
            id
        }
        outputs {
            key
            file {
                id
                presignedUrl
            }
        }
    }
}`



// Export all as an object
module.exports = {
    createFileMutation,
    createTakeMutation,
    createJobMutation,
    getJobQuery
}