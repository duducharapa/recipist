import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import SelectType from "../components/SelectType";
import { findProduct } from "../data/Products";
import Product from "../models/Product";

interface RouterProps {
  id: string
}

function ProductPage() {
  const { id: idParam }: RouterProps = useParams();
  const [ id, setId ] = useState<number>(0);
  const [ name, setName ] = useState<string>("");
  const [ quantity, setQuantity ] = useState<number>(0);
  // const [ type, setType ] = useState<string>("");

  const saveProduct = (event: any) => {
    alert('Not implemented yet');
  }

  useEffect(() => {
    const data: Product = findProduct(parseInt(idParam));
    if (data.isValid()) {
      setId(data.id);
      setName(data.name);
      setQuantity(data.quantity);
      // setType(data.type);
    }
  }, [idParam]);

  if (!id) {
    return (
      <Container>
        <Typography variant="h4" color="textSecondary">
          Produto não encontrado!
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4" color="primary" align="center">
            {name}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <InputLabel id="namelabel">Nome</InputLabel>
          <TextField
            id="name"
            value={name}
            variant="outlined"
            fullWidth={true}
            onChange={(event: any) => setName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <SelectType />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <InputLabel id="quantitylabel">Quantidade</InputLabel>
          <TextField
            id="quantity"
            value={quantity}
            type="number"
            variant="outlined"
            fullWidth={true}
            onChange={(event: any) => setQuantity(event.target.quantity)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Divider />
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item xs={12} sm={6} md={4}>
          <Button variant="contained" color="primary" fullWidth={true} onClick={saveProduct}>
            Salvar
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ProductPage;