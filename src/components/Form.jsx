function Form(){
    return(
        <>
        <center class="mt-5">
          <div class="form-floating mb-3 col-4">
        
  <input type="number" class="form-control" id="floatingInput" placeholder="Amount"></input>
  <label for="floatingInput">Enter Amount</label>
</div>
<div class="form-floating mb-3 col-4">
  <input type="number" class="form-control" id="floatingPassword" placeholder="Interest Rate"></input>
  <label for="floatingPassword">Interest Rate</label>
</div>  
<div class="form-floating mb-3 col-4">
      <input type="number" class="form-control" id="floatingPassword1" placeholder="Years"></input>
  <label for="floatingPassword1">Years</label>
</div>  
      </center>


        </>
    )
}

export default Form;