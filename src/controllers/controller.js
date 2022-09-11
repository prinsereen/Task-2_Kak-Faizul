exports.awal = (req, res, next) => {
    res.send('<h1>/json untuk mendapatkan profile <br> /kuliah untuk mendapatkan kuliah  </h1>')
};

exports.json = (req, res, next) => {
    res.send({
        nama : `Prins Naval Nuzeren`,
        Umur : `18 tahun`,
        Hobby: `Ngoding`,
        Cita: `Menjadi FSD`
    })
}



