<script>
  //import valstybes from './valstybes'
  //import miestai from './miestai'

  import { getContext } from 'svelte';
  export let adresas = {};
  export let isDisabled = false

  const AdresasErrors = {
    valstybe: '',
    adresas1: '',
    adresas2: '',
    adresas3: '',
    adresas4: '',
    miestas: '',
    pasto_kodas: ''
  }


  let valstybes = getContext('valstybes');
  let miestai = getContext('miestai');

  $: isLietuva = adresas.valstybe === 'LT' ? true : false;
</script>

<nu-field>
  <nu-label for=":next"> Valstybė </nu-label>

  <nu-btn
    id="valstybe"
    width="100%"
    columns="1fr auto"
    placeholder="Pasirinkite valstybę"
    value={adresas.valstybe}
    on:input={(event) => (adresas.valstybe = event.detail)}
    disabled={isDisabled}
    toggle
  >
    <nu-value list />
    <nu-dropdownicon />
    <nu-popuplistbox>
      {#each valstybes as item}
        <nu-option value={item.ALPHA_2_CODE}>
          {item.LT_SHORT_NAME}
        </nu-option>
      {/each}
    </nu-popuplistbox>
  </nu-btn>

  <nu-block color="hue(1)">
    {AdresasErrors.valstybe}
  </nu-block>
</nu-field>

<nu-field>
  <nu-label for=":next">Adresas 1</nu-label>

  <nu-input
    type="text"
    id="adresas1"
    value={adresas.adresas1}
    on:input={(event) => (adresas.adresas1 = event.detail)}
    disabled={isDisabled}
  />

  <nu-block color="hue(1)">
    {AdresasErrors.adresas1}
  </nu-block>
</nu-field>

<nu-field>
  <nu-label for=":next">Adresas 2</nu-label>

  <nu-input
    type="text"
    id="adresas2"
    value={adresas.adresas2}
    on:input={(event) => (adresas.adresas2 = event.detail)}
    disabled={isDisabled}
  />
</nu-field>

<nu-field>
  <nu-label for=":next">Adresas 3</nu-label>

  <nu-input
    type="text"
    id="adresas3"
    value={adresas.adresas3}
    on:input={(event) => (adresas.adresas3 = event.detail)}
    disabled={isDisabled}
  />
</nu-field>

{#if !isLietuva}
  <nu-field>
    <nu-label for=":next">Adresas 4</nu-label>

    <nu-input
      type="text"
      id="adresas4"
      value={adresas.adresas4}
      on:input={(event) => (adresas.adresas4 = event.detail)}
      disabled={isDisabled}
    />
  </nu-field>
{:else}
  <nu-field>
    <nu-label for=":next">Miestas / rajonas</nu-label>

    <nu-btn
      id="miestas"
      width="100%"
      columns="1fr auto"
      placeholder="Pasirinkite miestą/rajoną"
      value={adresas.miestas}
      on:input={(event) => (adresas.miestas = event.detail)}
      disabled={isDisabled}
    >
      <nu-value list />
      <nu-dropdownicon />
      <nu-popuplistbox>
        {#each miestai as item}
          <nu-option value={item.MST_ID}>
            {item.MST_Name}
          </nu-option>
        {/each}
      </nu-popuplistbox>
    </nu-btn>

    <nu-block color="hue(1)">
      {AdresasErrors.miestas}
    </nu-block>
  </nu-field>
{/if}

<nu-field>
  <nu-label for=":next">Pašto kodas</nu-label>
  {#if isLietuva}
    <nu-inputgroup fill="input">
      <nu-block padding>LT-</nu-block>
      <nu-input
        type="text"
        id="pasto_kodas"
        value={adresas.pasto_kodas}
        on:input={(event) => (adresas.pasto_kodas = event.detail)}
        disabled={isDisabled}
      />
    </nu-inputgroup>
  {:else}
    <nu-input
      type="text"
      id="pasto_kodas"
      value={adresas.pasto_kodas}
      on:input={(event) => (adresas.pasto_kodas = event.detail)}
      disabled={isDisabled}
    />
  {/if}

  <nu-block color="hue(1)">
    {AdresasErrors.pasto_kodas}
  </nu-block>
</nu-field>

