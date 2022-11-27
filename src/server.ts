import app from "./app"

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
    console.log(`Server com TS rodando na porta: ${PORT}`);
  });
  
  //   http://localhost:5000/src/uploads/nome_da imahemsx