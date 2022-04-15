<script>
  import { page } from '$app/stores'
  export let ssrParams
  $: browserParams = $page.params
</script>

<h1>Params decoding test</h1>

<p>Server side recieved params:</p>
<pre><code>{JSON.stringify(ssrParams, null, 2)}</code></pre>

<p>Browser side recieved params:</p>
<p>Server side recieved params:</p>
<pre><code>{JSON.stringify(browserParams, null, 2)}</code></pre>

<h2>Some samples of bad behaviour:</h2>
<ol>
  <li><a href={encodeURIComponent('example=foo')}>example=foo</a></li>
  <li><a href={encodeURIComponent('test@bar')}>test@bar</a></li>
  <li><a href={encodeURIComponent('why:is:colon')}>why:is:colon</a></li>
</ol>