import { InputLabel, MenuItem, Select } from "@material-ui/core";

function SelectType() {
  return (
    <>
      <InputLabel id="typelabel">Tipo</InputLabel>
      <Select variant="outlined" labelId="typelabel" id="type" value="teste" fullWidth={true}>
        <MenuItem value="teste">teste</MenuItem>
        <MenuItem value="teste">teste1</MenuItem>
      </Select>
    </>
  );
}

export default SelectType;