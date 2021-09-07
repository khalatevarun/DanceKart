import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from '@material-ui/core/Slider';
import { db } from './firebase';
import { useStateValue } from './StateProvider';

export default function Address() {
  const [{ user }, dispatch] = useStateValue();
  const [addressDetails, setAddressDetails] = useState();

  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: null,
    contact: null,
    pin_code: null,
    address: null,
    state: null,
    city: null,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);

    db.collection('users')
      .doc(user?.uid)
      .set({ address_details: formValues }, { merge: true });
    setOpen(false);
    fetchAddress();
  };

  const handleClose = () => {
    setFormValues({});
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (user) fetchAddress();
  }, [user]);

  const fetchAddress = () => {
    db.collection('users')
      .doc(user?.uid)
      .onSnapshot((snapshot) => {
        setAddressDetails({ ...snapshot.data().address_details });
        setFormValues({ ...snapshot.data().address_details });
      });
  };

  console.log('ADDRESS DETAILS >>>', addressDetails);

  return (
    <div>
      {addressDetails ? (
        <div className="address__data">
          <h4>
            {addressDetails.name}, {addressDetails.contact}{' '}
          </h4>
          <div>
            {addressDetails.address}, {addressDetails.city},{' '}
            {addressDetails.pincode}, {addressDetails.state}
          </div>
          <br />
          <Button onClick={handleClickOpen} variant="outlined">
            Change Address
          </Button>
        </div>
      ) : (
        <Button onClick={handleClickOpen}>Add Address</Button>
      )}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Delivery Address</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill all the details in order to place your order
            successfully.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <div className="address__formCategory">Contact Details</div>
            <br />
            <Grid
              container
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Grid item>
                <TextField
                  required
                  id="name-input"
                  name="name"
                  label="Name"
                  type="text"
                  variant="outlined"
                  defaultValue={addressDetails?.name}
                  value={formValues.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  id="contact-input"
                  name="contact"
                  label="Contact No."
                  type="number"
                  variant="outlined"
                  defaultValue={addressDetails?.contact}
                  value={formValues.contact}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <br />
            <div className="address__formCategory">Address</div>
            <br />
            <Grid
              container
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Grid item>
                <TextField
                  required
                  id="pincode-input"
                  name="pincode"
                  label="Pin Code"
                  type="number"
                  variant="outlined"
                  value={formValues.pincode}
                  defaultValue={addressDetails?.pincode}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  id="address-input"
                  name="address"
                  label="Address"
                  type="text"
                  variant="outlined"
                  value={formValues.address}
                  defaultValue={addressDetails?.address}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <br />
            <Grid
              container
              alignItems="center"
              direction="row"
              justifyContent="space-between"
            >
              <Grid item>
                <TextField
                  required
                  id="city-input"
                  name="city"
                  label="City"
                  type="text"
                  variant="outlined"
                  value={formValues.city}
                  defaultValue={addressDetails?.city}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  id="state-input"
                  name="state"
                  label="State"
                  type="text"
                  variant="outlined"
                  value={formValues.state}
                  defaultValue={addressDetails?.state}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
