<h1>Welcome to my maps page</h1>
<script>
    import maplibregl from 'maplibre-gl';
    import 'maplibre-gl/dist/maplibre-gl.css';
	import { onMount } from 'svelte';

    let map;
    let mapContainer;

    onMount(() => {
        map = new maplibregl.Map({
            container: mapContainer, // container id
            style: 'https://demotiles.maplibre.org/style.json', // style URL
            center: [0, 0], // starting position [lng, lat]
            zoom: 1 // starting zoom
        });
    });
</script>
<div class="w-96 h-96 map" bind:this={mapContainer}></div>
