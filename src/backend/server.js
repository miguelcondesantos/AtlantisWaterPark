const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb')
const Jimp = require('jimp')
const ascii = require('ascii-art')


const app = express()
const port = 5000
const uri = "mongodb+srv://root:fatec@teste.kfaa4qw.mongodb.net/?retryWrites=true&w=majority&appName=Teste"

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})

app.use(cors())
app.use(bodyParser.json())


async function run() {
  try {
    await client.connect()
    console.log("Conectado 👌")
  } catch (e) {
    console.error(e)
  }
}
run()

async function processAndShowImage() {
  try {
    // Processa a imagem
    const image = await Jimp.read('SUS.jpg');
    await image.resize(100, Jimp.AUTO).writeAsync('imagem-processada.jpg');

    // Converte a imagem para ASCII
    ascii.image({
      filepath: `${__dirname}/imagem-processada.jpg`,
      alphabet: 'variant2'
    }, (err, converted) => {
      if (err) {
        console.error(err)
        return
      }
      // Exibe a imagem no terminal
      console.log(converted)
    });

    console.log("Imagem processada e mostrada com sucesso!")
  } catch (error) {
    console.error("Erro ao processar e mostrar imagem:", error)
  }
}
processAndShowImage()


/**************************Cliente**************************/
app.post('/cadastroCliente', async (req, res) => {
  try {
      const database = client.db("Atlantis");
      const colecao = database.collection("Usuario");

      const { nome, nomeSocial, dataNascimento, telefones, enderecos, rg, cpf, passaporte } = req.body;

      const clienteExistente = await colecao.findOne({
          $or: [
              { rg: rg },
              { cpf: cpf },
              { passaporte: passaporte }
          ]
      });

      if (clienteExistente) {
          return res.status(400).send({ message: "Já existe um cliente cadastrado com esse RG, CPF ou passaporte." });
      }

      const novoCliente = {
          nome,
          nomeSocial,
          dataNascimento,
          telefones,
          enderecos,
          rg,
          cpf,
          passaporte,
      };

      const resultado = await colecao.insertOne(novoCliente);
      res.status(201).send({ message: "Cliente cadastrado com sucesso!", id: resultado.insertedId });
  } catch (e) {
      res.status(500).send(e);
  }
});


app.get('/clientes', async (req, res) => {
    try {
      const database = client.db("Atlantis");
      const colecao = database.collection("Usuario");
      const clientes = await colecao.find({}).toArray();
      res.status(200).json(clientes);
    } catch (e) {
      res.status(500).send(e);
    }
});
  
app.delete('/deleteCliente/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const database = client.db("Atlantis");
      const colecao = database.collection("Usuario");
      const result = await colecao.deleteOne({ _id: new ObjectId(id) });
      if (result.deletedCount === 1) {
        res.status(200).send({ message: "Cliente excluído com sucesso!" });
      } else {
        res.status(404).send({ message: "Cliente não encontrado!" });
      }
    } catch (e) {
      res.status(500).send(e);
    }
});

app.get('/clientes/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const database = client.db("Atlantis");
      const colecao = database.collection("Usuario");
      const cliente = await colecao.findOne({ _id: new ObjectId(id) });
      if (cliente) {
        res.status(200).json(cliente);
      } else {
        res.status(404).send({ message: "Cliente não encontrado!" });
      }
    } catch (e) {
      res.status(500).send(e);
    }
});

app.put('/atualizarCliente/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, nomeSocial, dataNascimento, telefones, enderecos, rg, cpf, passaporte } = req.body;
    const database = client.db("Atlantis");
    const colecao = database.collection("Usuario");
    
    const clienteAtualizado = {
        nome,
        nomeSocial,
        dataNascimento,
        telefones,
        enderecos,
        rg,
        cpf,
        passaporte
    };

    const result = await colecao.replaceOne({ _id: new ObjectId(id) }, clienteAtualizado);

    if (result.modifiedCount === 1) {
        res.status(200).send({ message: "Cliente atualizado com sucesso!" });
    } else {
        res.status(404).send({ message: "Cliente não encontrado!" });
    }
} catch (e) {
    res.status(500).send(e);
}
});



/**************************Acomodações**************************/
app.get('/acomodacoes', async (req, res) => {
  try {
    const database = client.db('Atlantis');
    const colecao = database.collection('Acomodacoes');

    const acomodacoes = await colecao.find({}).toArray();

    res.status(200).json(acomodacoes);
  } catch (err) {
    console.error('Erro ao buscar acomodações', err);
  }
});


/**************************Dependente**************************/
app.post('/clientes/:id/cadastroDependente', async (req, res) => {
  try {
    const database = client.db("Atlantis");
    const colecao = database.collection("Usuario");

    const { id } = req.params;
    const { nome, nomeSocial, endereco, dataNascimento } = req.body;

    const dependenteId = new ObjectId();

    const dependente = { 
      _id: dependenteId,
      nome, 
      nomeSocial, 
      endereco,
      dataNascimento
    };

    const result = await colecao.updateOne(
      { _id: new ObjectId(id) },
      { $push: { dependentes: dependente } }
    )

    if (result.modifiedCount === 1) {
      res.status(200).send({ message: "Dependente cadastrado com sucesso!", dependenteId: dependenteId.toString() });
    } else {
      res.status(404).send({ message: "Cliente não encontrado!" });
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

app.get('/dependente/:id')

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
