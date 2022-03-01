/************************************

MasterCSS 	
	
	-	Link all JS files in desired order, 
		then add this component to the end of 
		your global layout, so all JS is loaded last.

************************************/

export default function MasterCSS({ 
  //page vars
}) {
  return (
  	<>
  		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"  />
  	</>
  )
}
