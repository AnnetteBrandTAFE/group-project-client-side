const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const storage = require('node-persist');
const { v4: uuidv4 } = require('uuid');
const server = express();
// export default server;

(async () => {
    await storage.init({ dir: './data' })

    server.use(express.json());
    server.use(bodyParser.json());
    server.use(cors());

    //gets all approved projects
    server.get('/projects/approved', async (req, res) => {
        let projects = await storage.valuesWithKeyMatch(/project-/);
        let filteredResults = projects.filter(projects => Object.keys(projects).some(key => projects[key].toString().toLowerCase().includes("approved")))
        res.json(filteredResults)
    })

    
    //gets all pending projects
    // server.get('/projects/pending', async (req, res) => {
    //     let projects = await storage.valuesWithKeyMatch(/project-/);
    //     let filteredResults = projects.filter(projects => Object.keys(projects).some(key => projects[key].toString().toLowerCase().includes("pending")))
    //     res.json(filteredResults)
    // })
    server.get('/projects/pending', async (req, res) => {
        let projects = await storage.valuesWithKeyMatch(/project-/);
        let filteredResults = projects.filter(project => project.status == "pending")
        res.status(200).json(filteredResults)
    })


    //gets all declined projects
    // server.get('/projects/declined', async (req, res) => {
    //     let projects = await storage.valuesWithKeyMatch(/project-/);
    //     let filteredResults = projects.filter(projects => Object.keys(projects).some(key => projects[key].toString().toLowerCase().includes("declined")))
    //     res.json(filteredResults)
    // })
    server.get('/projects/declined', async (req, res) => {
        let projects = await storage.valuesWithKeyMatch(/project-/);
        let filteredResults = projects.filter(project => project.status == "declined")
        res.status(200).json(filteredResults)
    })


    //post handler for project submissions
    server.post('/projects/submissions', async (req, res) => {
        try {
            let project = {
                id: uuidv4(),
                name: req.body.name,
                postcode: Number(req.body.postcode),
                description: req.body.description,
                title: req.body.title,
                status: "pending",
                timeStamp: new Date().toISOString().slice(0, 17),
                voteCount: 0
            }
            if (!isNaN(project.postcode) && (project.title.length <= 50) && (project.description.length <= 300) && (project.name.length <= 50) && (project.postcode > 1999) && (project.title != "") && (typeof project.name === "string") && (project.postcode < 3000) && (project.name != "") && (project.description != "") && (typeof project.name === "string") && (typeof project.description === "string")) {
                //project ={...req.body}
                //project = { id: uuidv4(), timeStamp: new Date().toISOString().slice(0, 17), status: "pending", voteCount: 0, ...req.body };
                await storage.setItem(`project-${project.id}`, project);
                res.json({ status: 200, data: project });
            }
            else {
                // throw new Error('Invalid details entered')
                res.json({ status: 500, message: error.message });

            }
        }
        catch (error) {
            res.json({ status: 500, message: error.message });
        };
    });
    //post handler for votes
    server.put('/projects/approved/vote', async (req, res) => {
        let toVote = req.body.id
        let project = await storage.getItem(`project-${toVote}`)
        ++project.voteCount
        res.json(project.voteCount)
    })
    //post handler for project searches
    server.post('/projects/search', async (req, res) => {

        try {
            if (req.body.search != "") {
                let searchTerm = req.body.search.toLowerCase()
                let project = await storage.valuesWithKeyMatch(/project-/);
                let filteredResults = project.filter(project => Object.keys(project).some(key => project[key].toString().toLowerCase().includes(searchTerm)))
                let result = filteredResults.filter(p => p.status == "approved")
                res.json(result)
            }
            else {
                res.json({ status: 200, message: sucessful });
            }
        }
        catch (error) {
            res.json({ status: 500, message: error.message });
        };

    });
    //post handler for approving pending projects
    server.put('/projects/approve', async (req, res) => {
        try {
            let toApprove = req.body.id;
            let project = await storage.getItem(`project-${toApprove}`)
            if (project.status != "approved") {
                project.status = "approved"
                await storage.updateItem(`project-${project.id}`, project)
                res.json({ status: 200, data: project });
            } else {
                res.json({ status: 500, message: error.message });
            }
        } catch (error) {
            res.json({ status: 500, message: error.message });
        };
    })
    //post handler for declining projects
    server.put('/projects/decline', async (req, res) => {
        try {
            let toDecline = req.body.id;
            let project = await storage.getItem(`project-${toDecline}`)
            if (project.status != "decline") {
                project.status = "decline"
                await storage.updateItem(`project-${project.id}`, project)
                res.json({ status: 200, data: project });
            } else {
                res.json({ status: 500, message: error.message });

            }
        } catch (error) {
            res.json({ status: 500, message: error.message });
        };
    })


    server.listen(4000, () => {
        console.log('The server is listening on port 4000 http://localhost:4000');
    });
})();

module.exports = server