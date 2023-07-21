(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
		key: "",
	});

const properties = [
  // {
  //   address: "2117 Su St, MountainView, CA",
  //   description: "Single family house near golf club",
  //   price: "$ 1,700,000",
  //   type: "home",
  //   bed: 4,
  //   bath: 3,
  //   size: 200,
  //   position: {
  //     lat: 24.9940147636594,
  //     lng: 121.433901728607,
  //   },
  // },
  // {
  //   address: "197 Alicia Dr, Santa Clara, CA",
  //   description: "Multifloor large warehouse",
  //   price: "$ 5,000,000",
  //   type: "warehouse",
  //   bed: 5,
  //   bath: 4,
  //   size: 700,
  //   position: {
  //     lat: 22.9940147636594,
  //     lng: 120.433901728607,
  //   },
  // },
  // {
  //   address: "700 Jose Ave, Sunnyvale, CA",
  //   description: "3 storey townhouse with 2 car garage",
  //   price: "$ 3,850,000",
  //   type: "building",
  //   bed: 4,
  //   bath: 4,
  //   size: 600,
  //   position: {
  //     lat: 23.9940147636594,
  //     lng: 120.433901728607,
  //   },
  // },
];
  
function toggleHighlight(markerView, property) {
  if (markerView.content.classList.contains("highlight")) {
    markerView.content.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add("highlight");
    markerView.zIndex = 1;
  }
}

function buildContent(property) {
  const content = document.createElement("div");

  content.classList.add("property");
  content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}"></i>
        <span class="fa-sr-only">${property.type}</span>
    </div>
    <div class="details">
        <div class="price">${property.price}</div>
        <div class="address">${property.address}</div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
            <span class="fa-sr-only">bedroom</span>
            <span>${property.bed}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
            <span class="fa-sr-only">bathroom</span>
            <span>${property.bath}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
            <span class="fa-sr-only">size</span>
            <span>${property.size} ft<sup>2</sup></span>
        </div>
        </div>
    </div>
    `;
  return content;
}

async function initMap(properties) {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const { LatLng } = await google.maps.importLibrary("core");
  const center = new LatLng(23.7000, 121.0794);
  const map = new Map(document.getElementById("map"), {
    zoom: 7.5,
    center,
    mapId: "4504f8b37365c3d0",
  });

  for (const property of properties) {
    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(property),
      position: property.position,
      title: property.description,
    });

    AdvancedMarkerElement.addListener("click", () => {
      toggleHighlight(AdvancedMarkerElement, property);
    });
  }
}

initMap(properties);
  