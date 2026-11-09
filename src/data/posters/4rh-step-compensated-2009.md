---
title: Design and Testing of a Step-Compensated Bi-Conic Hydrostatic Spindle
authors: Byron R. Knapp<sup>1</sup>, David A. Arneson<sup>1</sup>, Melvin J. Liebers<sup>1</sup>, Daniel D. Oss<sup>1</sup> and Eric R. Marsh<sup>2</sup>
affiliations:
  - <sup>1</sup>Professional Instruments Company, Hopkins, Minnesota, USA
  - <sup>2</sup>The Pennsylvania State University, University Park, Pennsylvania, USA
year: 2009
event: ASPE
file: 2009 ASPE Step compensated 4RH BK
description: This work describes the design and testing of an oil hydrostatic spindle consisting of two conical bearing surfaces (bi-conic) using step compensation rather than restrictor compensation with pockets.
thumb: { width: 1000, height: 714 }
products: [4RH]
---

## Introduction

Hydrostatic spindles featuring conical surfaces have been shown to be very effective in providing precision rotation and high load capacity in a compact, low-profile package [1].

This work describes the design and testing of an oil hydrostatic spindle consisting of two conical bearing surfaces (bi-conic) using step compensation rather than restrictor compensation with pockets [2].

The most compelling argument for this oil hydrostatic spindle is the combination of nanometer-level error motions, high load capacity and high crash resistance.

<figure class="pf"><img src="/images/posters/4rh-step-compensated-2009/fig1.webp" width="1200" height="756" alt="The bi-conic spindle's ring-shaped stator beside its double-cone rotor" loading="lazy" /></figure>

## Motivation

The motivation for a step-compensated bi-conic spindle is derived from several potential advantages of the bi-conic design including:

- Increased bearing efficiency (load capacity for a given volume)
- Increased structural stiffness (enabling the use of higher bearing pressures)
- Balance of radial, axial and tilt load capacities
- Design simplicity

This step-compensated design has several advantages over a pocketed design with restrictor-compensation:

- Increased bearing area
- No pocket “print-through” to error motion
- Higher pressure bearing film
- Improved bearing stability

## Design

<figure class="pf"><img src="/images/posters/4rh-step-compensated-2009/fig2.webp" width="1200" height="547" alt="Section views comparing the bi-conic bearing with a flat thrust bearing, with the pressurized bearing film drawn in red" loading="lazy" /></figure>

The 4R BLOCK-HEAD® air bearing spindle is used as a standard of comparison for the bi-conic. This bi-conic design has 63% greater radial projected area with similar axial area resulting in increased bearing efficiency. The cone angle can be optimized for a given load condition.

<div class="tbl-w"><table class="ptbl">
<thead><tr><th scope="col">Spindle model</th><th scope="col">Axial capacity</th><th scope="col">Radial capacity</th><th scope="col">Tilt capacity</th></tr></thead>
<tbody>
<tr><th scope="row">4R BLOCK-HEAD®<br />150 PSI AIR</th><td>1,780 N<br />(400 lb)</td><td>440 N<br />(100 lb)</td><td>45 N-m<br />(400 lb-in)</td></tr>
<tr><th scope="row">4R Bi-conic<br />250 PSI OIL</th><td>3,750 N<br />(840 lb)</td><td>1,250 N<br />(280 lb)</td><td>125 N-m<br />(1100 lb-in)</td></tr>
<tr><th scope="row">4R Bi-conic<br />600 PSI OIL</th><td>9,000 N<br />(2,020 lb)</td><td>3,000 N<br />(670 lb)</td><td>300 N-m<br />(2630 lb-in)</td></tr>
</tbody>
</table></div>

The structural stiffness of the stator and rotor affect static and dynamic performance. The bi-conic rotor is noticeably stiffer in the axial direction which results in better dynamic performance and enables the use of far higher pressures.

A pair of high-precision non-contact air seals prevent oil leakage.

<figure class="pf"><img src="/images/posters/4rh-step-compensated-2009/fig3.webp" width="1200" height="687" alt="The assembled bi-conic spindle beside its separate stator ring" loading="lazy" /></figure>

## Testing

<figure class="pf"><img src="/images/posters/4rh-step-compensated-2009/fig4.webp" width="1200" height="872" alt="Compliance frequency response plot: the 4R Block-head at 150 PSI air shows a large resonance peak, the 4R bi-conic at 150 PSI oil stays nearly flat" loading="lazy" /></figure>

The combination of stiffer structure and the use of oil instead of air results in a significant improvement in the dynamics. A modal impact hammer (Kistler 2000 N) was used to excite the rotor while measuring the response with an accelerometer (Kistler K-Shear® 50 g). The compliance frequency response function was acquired with a dynamic signal analyzer (HP 35670A).

To test error motion, the bi-conic spindle was fitted with a brushless, DC motor and a 1024-count rotary encoder. Previous work has described our multiprobe error separation procedure using a high-resolution capacitive sensor (Lion Precision C23-C, 0.5 nm/mV) located at 0°, 99.844° and 202.5° [3]. The amplifier incorporates a 15 kHz first-order, low-pass analog filter with linear phase response. The data acquisition system (Lion Precision SEA V8.2) is triggered by the encoder. A low-pass digital filter with a 150 UPR cut-off is applied to the axial and radial error motion plots shown.

<figure class="pf pf-narrow"><img src="/images/posters/4rh-step-compensated-2009/fig5.webp" width="1200" height="1800" alt="Cutaway rendering of the motorized bi-conic spindle showing the conical bearing surfaces and motor" loading="lazy" /></figure>

<figure class="pf"><img src="/images/posters/4rh-step-compensated-2009/fig6.webp" width="1200" height="880" alt="Radial and axial error motion polar plots, labelled Total radial 5.5 nanometers and Total axial 6.3 nanometers" loading="lazy" /></figure>

## Conclusions

When supplied with high-pressure oil, the 4R bi-conic spindle offers significant improvements in load capacity while providing accuracy and stiffness similar to the 4R BLOCK-HEAD® spindle.

In industrial machining and grinding applications, air bearing spindles often lack the load capacity necessary to withstand sudden overloads. This high-pressure oil hydrostatic bearing is a logical alternative due to its high load capacity. Furthermore, the squeeze film effects and oil lubricating properties help to prevent damage to the bearing surfaces during an overload.

<figure class="pf"><img src="/images/posters/4rh-step-compensated-2009/fig7.webp" width="1200" height="772" alt="The bi-conic spindle grinding a part under a stream of coolant" loading="lazy" /></figure>

## References

<ol class="refs">
<li><span class="rn">[1]</span> M. Olson and D. Oss. Bi-conical air bearing spindle research. ME 5090, University of Minnesota. July 2002.</li>
<li><span class="rn">[2]</span> N.R. Kane, J. Sihler and A.H. Slocum. A hydrostatic rotary bearing with angled surface self-compensation. Precision Engineering, 27(2):125–139, 2003.</li>
<li><span class="rn">[3]</span> E.R. Marsh. Precision Spindle Metrology. DEStech Publications, 2007.</li>
</ol>
