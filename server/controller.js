module.exports = {

    createHouses: (req, res ) => {
        const dbInstance = req.app.get("db")
        const {property_name, address, city, state, zip_code} = req.body

        dbInstance.create_houses([property_name, address, city, state, zip_code])
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).json({errorMessage: "Error"})
            console.log(error)
        })
    },
    
    getHouses: (req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.get_houses(id)
        .then(houses => res.status(200).json(houses))
    }, 

    editHouses: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.edit_houses()
        .then(()=> res.sendStatus(200))
        .catch(error => {
            res.status(500).json({errorMessage: "Error"})
            console.log(error)
        })
    },

    deleteHouses: (req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance.delete_houses(id)
        .then(houses => res.status(200).json(houses))
    }

}