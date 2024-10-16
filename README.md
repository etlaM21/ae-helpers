# Collection of Helper Scripts and Expressions for Adobe After Effects

## Expressions

<details>
  <summary>
    <a href="expressions/bpm-sync-linear-dec.jsx">Layer In- and Outpoint Animation - Linear</a>
  </summary>
  Transition a value in from 0 to 1 and out from 1 to 0 according to the layer's in- and outpoint
</details>

<details>
  <summary>
    <a href="expressions/bpm-sync-linear-inc.jsx">BPM Sync - Linear - Increasing</a>
  </summary>
  Value linearly increasing from 0 to 1 for every beat according to a specified BPM
</details>

<details>
  <summary>
    <a href="expressions/bpm-sync-linear-dec.jsx">BPM Sync - Linear - Decreasing</a>
  </summary>
  Value linearly decreasing from 1 to 0 for every beat according to a specified BPM
</details>

### Additional Notes

This repository does **not make use** of the ES6 keywords **let** or **const** when declaring variables. Older versions of After Effects do not support ES6 type declarations and the same goes for scripting. Although ugly, this ensures maximum compatibility.