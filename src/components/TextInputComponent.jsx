import { Grid, TextField, Alert } from "@mui/material";

const TextInputComponent = ({
  xs,
  id,
  label,
  autoFocus,
  value,
  onChange,
  onBlur,
  errors,
}) => {
  return (
    <Grid item xs={xs}>
      <TextField
        name={id}
        required
        fullWidth
        id={id}
        label={label}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors && <Alert severity="error">{errors}</Alert>}
    </Grid>
  );
};

TextInputComponent.defaultProps = {
  xs: 6,
  autoFocus: false,
};

export default TextInputComponent;
