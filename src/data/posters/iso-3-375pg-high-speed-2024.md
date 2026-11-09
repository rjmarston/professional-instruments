---
title: High speed air bearing spindle for ultra precision machining
authors: Byron Knapp, Dan Oss, and Dave Arneson
affiliations:
  - Professional Instruments Company
  - Hopkins, Minnesota, USA
year: 2024
event: euspen
presented: Presented at the 24th International Conference and Exhibition of the European Society for Precision Engineering and Nanotechnology in Dublin, IE, 10 - 14 June 2024.
file: 2024 euspen ISO3.375PG BK
description: This paper describes design and testing of a new porous graphite air bearing spindle for diamond machining capable of 18,000 RPM.
thumb: { width: 1000, height: 1411 }
products: [ISO 3.375PG]
---

## Abstract

Increasing demands for deterministic direct machining of infrared optics and molds require precision air bearing spindles with high stiffness capable of higher cutting speeds. This paper describes design and testing of a new porous graphite air bearing spindle for diamond machining capable of 18,000 RPM. Proper testing techniques and apparatus required for critical aspects of ultra-precision spindles are described. Static stiffness testing demonstrates radial stiffness at the nose of 50 N/µm and axial stiffness of 240 N/µm. Dynamic response shows the first natural frequency is highly damped and above 1,800 Hz and spindle metrology demonstrates error motions less than 6 nm.

<figure class="pf pf-narrow"><img src="/images/posters/iso-3-375pg-high-speed-2024/fig1.webp" width="1200" height="1118" alt="The ISO 3.375PG spindle, a black cylinder with fittings on its front flange" loading="lazy" /><figcaption><span class="fn">Figure 1.</span> High speed air bearing spindle using porous graphite compensation for diamond turning.</figcaption></figure>

## Background

The ultra-precision air bearing work spindle shown in Figure 1 has been newly developed to address the increasing number of applications requiring infrared and micro optics [1]. Brittle single crystal semiconductors and micro optic molds and can be machined at higher spindle speeds to reduce brittle fracture [2] and improve productivity [3]. However, rotational speed is often limited to 10,000 RPM in an effort to mitigate dynamic spindle errors [4, 5]. To address this, a new porous graphite air bearing spindle has been developed capable of 18,000 RPM with high stiffness and nanometer-level errors. The cross section in Figure 2 shows porous graphite journals and compound compensated thrusts (grooved thrust face fed by annular restriction). A brushless permanent magnet motor and a 1,650 line-count encoder are mounted directly to the spindle shaft. Vacuum is supplied to the chuck for workholding via a non-contact rotary union.

<figure class="pf"><img src="/images/posters/iso-3-375pg-high-speed-2024/fig2.webp" width="1200" height="872" alt="Cutaway of the spindle labelled with its porous journals, annular thrust restriction, encoder, cooling jackets, grooved thrust compensation, vacuum gland and brushless motor" loading="lazy" /><figcaption><span class="fn">Figure 2.</span> Cross section of porous graphite work spindle for diamond machining.</figcaption></figure>

## Static stiffness

Static stiffness is a crucial indicator for spindles to be used in precision machining applications—particularly central stiffness under light cutting loads. Specially-built hardware to measure radial load capacity at the nose and radial static stiffness is shown in Figure 3. An air bearing piston pulls the rotor at the nose of the spindle in the radial direction. In a separate metrology loop, a twisted band Abramson movement indicator (CEJ Mikrokator) with 250 nm resolution measures radial displacement of the rotor. Ultimate radial load capacity at the spindle nose is 66 kg with 0.7 MPa (100 PSI) inlet pressure. Resulting radial stiffness at the nose is 50 N/µm with 0.7 MPa (100 PSI) inlet pressure. Stiffness is linear through the load range, which is especially critical in the region of low cutting force typical of precision machining operations.

<figure class="pf"><img src="/images/posters/iso-3-375pg-high-speed-2024/fig3.webp" width="1200" height="682" alt="Plot of force against displacement, a straight line labelled Radial 50 N/µm, beside the radial test rig" loading="lazy" /><figcaption><span class="fn">Figure 3.</span> Radial stiffness and load capacity at the spindle nose is 50 N/µm and 66 kg with 0.7 MPa (100 PSI) inlet pressure.</figcaption></figure>

Hardware to measure axial load capacity and axial static stiffness is shown in Figure 4. In this test, an air bearing piston pushes the rotor at the top of the spindle in the axial direction. In a separate metrology loop, axial displacement of the rotor is measured with a Mikrokator. Ultimate axial load capacity is 101 kg and axial stiffness is 240 N/µm with 0.7 Mpa (100 PSI) inlet pressure.

<figure class="pf"><img src="/images/posters/iso-3-375pg-high-speed-2024/fig4.webp" width="1200" height="700" alt="Plot of force against displacement, a steep straight line labelled Axial 240 N/µm, beside the axial test rig" loading="lazy" /><figcaption><span class="fn">Figure 4.</span> Axial stiffness and load capacity is 240 N/µm and 101 kg with 0.7 MPa (100 PSI) inlet pressure.</figcaption></figure>

## Dynamic stiffness

Modal analysis is used to determine dynamic response with natural frequencies and mode shapes. The spindle is supported on compliant foam to minimize boundary condition influences. An impact hammer (Kistler 500 N) excites the rotor in the axial direction while an accelerometer (Kister K-Shear 25g), attached to the stator, measures the response. A 24-bit dynamic signal analyzer (Data Physics SignalCalc Ace) records excitation and response to calculate frequency response functions. At 0.7 Mpa (100 PSI), the first mode is highly damped at 1,840 Hz. Heavily damped modes in the axial direction help reduce axial spoking (star pattern) while machining optical surfaces [6].

<figure class="pf"><img src="/images/posters/iso-3-375pg-high-speed-2024/fig5.webp" width="1200" height="795" alt="Frequency response plot of acceleration magnitude against frequency, with a broad peak labelled Axial mode 1 840 Hz" loading="lazy" /><figcaption><span class="fn">Figure 5.</span> Axial direction frequency response function shows a highly damped first mode at 1,840 Hz.</figcaption></figure>

## Error motion

Precision spindle metrology is typically accomplished by measuring the surface of an artifact mounted to a spindle [7]. This is complicated by the fact that artifact out-of-roundness often exceeds error of a precision spindle and separation techniques must be used to extract the true spindle error motion. In this work, multiprobe radial error separation is used and harmonic suppression minimized by using asymmetrically spaced indexing angles of 0°, 99.844° and 202.5° [8]. For the spindle under test, total radial error motion is 4.8 nm and total axial error motion is 5.2 nm at 10,000 RPM.

<figure class="pf"><img src="/images/posters/iso-3-375pg-high-speed-2024/fig6.webp" width="1200" height="407" alt="Radial and axial error motion polar plots from the error analyzer" loading="lazy" /><figcaption><span class="fn">Figure 6.</span> Spindle error motion less than 6 nm.</figcaption></figure>

## Conclusion

An increasing number of small optics must be machined at higher spindle speeds for increased productivity. A new porous graphite air bearing workholding spindle which extends the current state-of-the-art has been developed to address this need. Static stiffness testing demonstrates 50 N/µm radial stiffness at the nose and 240 N/µm axial stiffness. The dynamic response shows the first natural frequency is highly damped and above 1,800 Hz. Equipment and techniques to measure radial and axial spindle error motion less than 6 nm are demonstrated.

## References

<ol class="refs">
<li><span class="rn">[1]</span> MA Davies et al. Application of precision diamond machining to the manufacture of microphotonics comp. Proc. SPIE 5183, 2003.</li>
<li><span class="rn">[2]</span> M Tunesi et al. Effect of cutting speed in single point diamond turning of (100)Ge. Manufacturing Letters. 38: 15-18, 2023.</li>
<li><span class="rn">[3]</span> E Brinksmeier and L Schönemann (Eds.) Ultra-precision High Performance Cutting. Report of DFG Research Unit FOR 1845. Springer Nature Switzerland AG Cham: 2020.</li>
<li><span class="rn">[4]</span> P Huang et al. Investigation of the effects of spindle unbalance induced error motion on machining accuracy in ultra-precision DT. Int J of Machine Tools &amp; Manufacture. 94: 48–56, 2015.</li>
<li><span class="rn">[5]</span> D Huo and K Cheng. Micro-Cutting: Fundamentals and Applications - Diamond turning and micro turning, 153-183, 2013.</li>
<li><span class="rn">[6]</span> M Tauhiduzzaman et al. Form error in diamond turning. Precision Engineering, 42: 22-36, 2015.</li>
<li><span class="rn">[7]</span> E Marsh. Precision Spindle Metrology, Second Edition. Destech Publications, Inc. Lancaster, PA: 2010.</li>
<li><span class="rn">[8]</span> E Marsh et al. A Comparison of Reversal and Multiprobe Error Separation. Precision Engineering. 34:85-91, 2010.</li>
</ol>
