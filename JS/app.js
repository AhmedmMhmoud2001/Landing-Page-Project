// start Dynamic navigation
// make sections in arry
const sections = Array.from(document.getElementsByTagName("section"));
// build the nav
// Build ul - li a
const ul = document.getElementById("navbar__list")
for(section of sections){
   const listItem = document.createElement('li');
   const listItemLink=document.createElement('a');
   const data =section.getAttribute("data-nav");
   const data_nav = document.createAttribute("data-section-type");
   data_nav.value = data
   // use the section data-nav to fill the <a> tag
   listItemLink.id = data;
   listItemLink.textContent=data;
   listItem.setAttributeNode(data_nav)
   listItem.setAttribute("onclick","showDetails(this)")
   listItem.appendChild(listItemLink);
   ul.appendChild(listItem);
 }
 // end Dynamic navigation

// start Scroll to section on link click
function showDetails(section) {
    const sectionType = section.getAttribute("data-section-type");
    console.log(sectionType)
    for(section of sections){
      const item_section = section.getAttribute("data-nav")
      if (sectionType === item_section) {
         if (sectionType === item_section) {
            section.classList.add('your-active-class');
            const scrollDiv = document.getElementById(section.id).offsetTop;
            window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
         }
         else{
            item.classList.remove('your-active-class');
         }
    }
  }
}
// end  Scroll to section on link click



// Set sections as active
// Add class 'active' to section when near top of viewport
 function myFunction() {
      const element = document.getElementById("section1");
      const rect = element.getBoundingClientRect();
      if(rect.top.toFixed()<250 && rect.top.toFixed()>-100){
         element.classList.add('active');
      }
      else{
         element.classList.remove('active');
      }
      const element2 = document.getElementById("section2");
      const rect2 = element2.getBoundingClientRect();
      if(rect2.top.toFixed()<250 && rect2.top.toFixed()>-100){
         element2.classList.add('active');
      }
      else {
         element2.classList.remove('active');
      }
      const element3 = document.getElementById("section3");
      const rect3 = element3.getBoundingClientRect();
      if((rect3.top.toFixed()<250 && rect3.top.toFixed()>-100)){
         element3.classList.add('active');
      }
      else{
         element3.classList.remove('active');
      }
      const element4 = document.getElementById("section4");
      const rect4 = element4.getBoundingClientRect();
      if((rect4.top.toFixed()<250 && rect4.top.toFixed()>-100)){
         element4.classList.add('active');
      }
      else{
         element4.classList.remove('active');
      }
   }
