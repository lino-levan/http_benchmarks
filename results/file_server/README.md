<table>
<tr>
    <td align="center" rowspan="2">Name</td>
    <td align="center" colspan="2">Good-o-meter</td>
    <td align="center" colspan="4">Throughput (rps)</td>
    <td align="center" colspan="3">Latency (ms)</td>
</tr>
<tr>
    <!-- still Name -->
    <td align="center">Throughput</td>
    <td align="center">Latency</td>
    <td align="center">Mean</td>
    <td align="center">Max</td>
    <td align="center">Standard deviation</td>
    <td align="center">Size per second</td>
    <td align="center">Avg</td>
    <td align="center">Min</td>
    <td align="center">Max</td>
</tr><tr>
    <td><a href="./vixeny.ts.md">Vixeny</a></td>
    <td>100.00%</td>
    <td>100.00%</td>
    <td>13.21k</td>
    <td>15.01k</td>
    <td>1.57k</td>
    <td>69.84 MiB</td>
    <td>4.83</td>
    <td>1.48</td>
    <td>8.66</td>
</tr>
<tr>
    <td><a href="./hono.ts.md">Hono</a></td>
    <td>91.53%</td>
    <td>91.70%</td>
    <td>12.09k</td>
    <td>13.88k</td>
    <td>1.42k</td>
    <td>64.03 MiB</td>
    <td>5.27</td>
    <td>1.43</td>
    <td>8.69</td>
</tr>
<tr>
    <td><a href="./aqua.ts.md">Aqua</a></td>
    <td>72.94%</td>
    <td>73.04%</td>
    <td>9.63k</td>
    <td>12.82k</td>
    <td>1.44k</td>
    <td>51.07 MiB</td>
    <td>6.62</td>
    <td>3.46</td>
    <td>11.83</td>
</tr>
<tr>
    <td><a href="./oak.ts.md">Oak</a></td>
    <td>43.20%</td>
    <td>41.69%</td>
    <td>5.71k</td>
    <td>15.09k</td>
    <td>2.58k</td>
    <td>29.15 MiB</td>
    <td>11.59</td>
    <td>5.51</td>
    <td>17.78</td>
</tr>
<tr>
    <td><a href="./danet.ts.md">Danet</a></td>
    <td>34.54%</td>
    <td>34.07%</td>
    <td>4.56k</td>
    <td>11.22k</td>
    <td>1.64k</td>
    <td>23.83 MiB</td>
    <td>14.19</td>
    <td>7.26</td>
    <td>23.67</td>
</tr>
<tr>
    <td><a href="./deno_serve.ts.md">Deno.serve</a></td>
    <td>21.56%</td>
    <td>11.73%</td>
    <td>2.85k</td>
    <td>259.76k</td>
    <td>13.20k</td>
    <td>8.20 MiB</td>
    <td>41.19</td>
    <td>0.45</td>
    <td>45.00</td>
</tr>
<tr>
    <td><a href="./deno_serve_http.ts.md">Deno.serveHttp</a></td>
    <td>16.10%</td>
    <td>11.69%</td>
    <td>2.13k</td>
    <td>327.68k</td>
    <td>11.93k</td>
    <td>5.11 MiB</td>
    <td>41.33</td>
    <td>10.53</td>
    <td>47.02</td>
</tr>
<tr>
    <td><a href="./deno_serve_serveDir.ts.md">Deno.serve + serveDir from std</a></td>
    <td>14.60%</td>
    <td>11.65%</td>
    <td>1.93k</td>
    <td>253.31k</td>
    <td>9.17k</td>
    <td>8.14 MiB</td>
    <td>41.49</td>
    <td>1.06</td>
    <td>51.52</td>
</tr>
<tr>
    <td><a href="./deno_std_serve.ts.md">std serve + serveDir</a></td>
    <td>12.04%</td>
    <td>11.63%</td>
    <td>1.59k</td>
    <td>5.97k</td>
    <td>637.68</td>
    <td>5.09 MiB</td>
    <td>41.57</td>
    <td>15.49</td>
    <td>66.82</td>
</tr>
</table>