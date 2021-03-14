<script>
	import valstybes from './valstybes';
	import miestai from './miestai';
  
	import { setContext } from 'svelte';
	import Page3 from './components/Page3.svelte';
  
	let currentTab = 3;
  
  
	setContext('valstybes', valstybes);
	setContext('miestai', miestai);
  
 
  </script>
  
  <nu-root>
	<nu-props ></nu-props>
	<nu-theme id="gs-theme" hue="#002C6C" />
	<nu-flex padding="32px" content="stretch center">
	  <nu-block border="#C4D7ED" width="1110px">
		<nu-form>
		  <nu-block color="#F26334" padding="72px 95px 79px" size="40px">
			test
		  </nu-block>
  
		  <nu-flow>
			<svelte:component this={Page3} />
  
		  </nu-flow>
		</nu-form>
	  </nu-block>
	</nu-flex>
  </nu-root>
  
 