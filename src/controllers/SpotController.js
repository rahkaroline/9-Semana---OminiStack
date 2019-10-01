module.exports = {
    async store(req, res) {
        console.log(res.body);
        console.log(req.file);
        
        return res.json({ ok: true })
    }
};