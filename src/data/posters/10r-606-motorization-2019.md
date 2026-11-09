---
title: Motorization of a large aperture air bearing for use in a new X-ray microscope
authors: Henry Arneson<sup>1</sup>, Curt Preissner<sup>2</sup>, Brian O’Connor<sup>3</sup>
affiliations:
  - <sup>1</sup>Professional Instruments Company, Hopkins, Minnesota, USA
  - <sup>2</sup>Advanced Photon Source, Argonne National Laboratory, Argonne, Illinois, USA
  - <sup>3</sup>Aerotech, Inc, Pittsburgh, PA 15238
year: 2019
event: ASPE
presented: Presented at the 34th Annual Meeting of the American Society for Precision Engineering in Pittsburgh, PA, October 28 - November 1, 2019.
file: 2019 ASPE 10R 606 HA
description: At the Advanced Photon Source (APS) at Argonne National Laboratory in Illinois, USA, cutting edge research is conducted using high energy X-ray beams.
thumb: { width: 1000, height: 1411 }
products: [10R 606]
---

## Abstract

At the Advanced Photon Source (APS) at Argonne National Laboratory in Illinois, USA, cutting edge research is conducted using high energy X-ray beams. They are upgrading their new X-ray microscope, the Velociprobe, which poses a unique challenge for a rotary stage. The new stage needs to have extremely low error motions, high stiffness and a large aperture within the stage for instrumentation and routing of crucial wiring. The model 606 Blockhead air bearing spindle is a nice solution to because it provides ultra-precision error motions and high stiffness in a compact package. Additionally, the 10R-606 Blockhead accommodates a large aperture in the middle of the bearing. To fit the requirements of this application, we worked with Aerotech to develop a bespoke motorization solution with minimal influence on error motions. This paper discusses the unique motorization solution implemented on the 10R 606 Blockhead for use in the upgraded Velociprobe at the APS.

## Introduction

Since the 1970’s, Professional Instruments Company has adapted brushless DC motors for use with our ultra-precision air bearings. Brushless DC motors are ideal for demanding applications because of their contactless operation, longevity, and ability to be directly driven on axis with the spindle. Their compact size allows for close-coupling to the air bearing centerline minimizing the influence of nonsymmetrical forces on spindle error motion. Aerotech has extensive experience in demanding motorization systems for advanced industries such as semiconductor, photonics, and ultra-precision. Collaboration with Aerotech was instrumental to providing a motorization system with negligible motor influence on spindle error motion.

Blockhead air bearing spindles offer high stiffness and accuracy within a compact footprint, making them applicable to a wide range of applications. The 10R-606 has specified total error motions of less than 50 nm with radial and axial stiffness of 0.35 and 0.6 kN/μm, respectively. The large aperture of 154 mm in the 10R-606 Blockhead air bearing was originally built as open clearance of optics for precise alignment.

APS is a premier US research facility where scientists and engineers use high brightness X-ray beams to probe structures and functions of materials. The fast-scanning Velociprobe [1] is being modified to quickly scan large sample areas. This upgrade required a compact design and the aperture of the spindle allowed the sample scanning stages to be within the spindle rather than on top, which decreases the size of the complete motion assembly. The 10R-606 will provide ±1 arc second of positioning capability while providing a stable mount for the precision scanning stages within the cavity. Figure 1 shows the spindle in assembly with the Renishaw RESM 32768 line count encoder being installed.

<figure class="pf pf-narrow"><img src="/images/posters/10r-606-motorization-2019/fig1.webp" width="1200" height="1004" alt="A 10R 606 Blockhead, upside down, with a red arrow pointing to the encoder ring on its top face" loading="lazy" /><figcaption><span class="fn">Figure 1.</span> [Upside down] Motorized 10R 606 before the encoder enclosure is mounted. The encoder here is a Renishaw RESM with 32768 line counts and will allow for ±1 arc second positioning</figcaption></figure>

## Motorization

Motorization of air bearing spindles with little to zero motor influence on the nanometer-level requires extreme care in design and manufacturing. The motor must have sufficient pole pairs to minimize motor pole print through (to the error motions) without sacrificing too much torque. The influence of the motor coils must also be minimized because it can be significant to the error motion of the rotor. The S-240-43-A-ES model Aerotech motor was adapted to this spindle for this application. It utilizes aluminum laminations as opposed to the usual silicon iron laminations to practically eliminate attractions between the rotor and the stator. While unwanted extra attraction forces can’t be fully eliminated between rotor and stator, they are minimized by using lower flux levels, sinusoidal gap flux, stator winding with low harmonic content and slotless stator configuration.

Set up of this motor to the spindle is non-trivial because the smallest misalignments can lead to significant errors. The rotor, stator and encoder are then aligned precisely to the rotational axis of the spindle.

<figure class="pf"><img src="/images/posters/10r-606-motorization-2019/fig2.webp" width="1200" height="821" alt="Cross section of the motorized spindle assembly, with an arrow at the encoder location near the base" loading="lazy" /><figcaption><span class="fn">Figure 2.</span> [Rightside up] Cross section of the motorized assembly with the encoder enclosure mounted. The arrow indicates the location of the Renishaw RESM encoder</figcaption></figure>

## Testing

Error motions of the spindle and motor assembly are evaluated using our special three-probe error separation set up. This hardware reliably tests spindles down to single digit nanometers over a variety of speed ranges [4]. A C9.5-2.0 Lion Precision capacitance probe is mounted directly to the stator and provides a stiff measuring loop. In this setup, the ball is approximately 130 mm above the working surface of the spindle. Precision jig ground pin holes are used to position the single probe to 3 unique angular positions. Probe positions (0°, 99.84375°, and 202.5°) were intentionally chosen because of their low harmonic content. Using three-probe error separation, detailed in Precision Spindle Metrology by Dr. Eric Marsh [3], the ball form error is separated from the error of the spindle which is necessary at this level of precision.

<figure class="pf pf-narrow"><img src="/images/posters/10r-606-motorization-2019/fig3.webp" width="1200" height="1016" alt="The motorized spindle with error separation hardware on top; labels mark the capacitance probes and the measurement hardware" loading="lazy" /><figcaption><span class="fn">Figure 3.</span> Complete motorization assembly with the error separation hardware mounted. Note that the spindle is in its rightside up orientation and the error motion hardware (indicated by the arrow) is mounted to the stator</figcaption></figure>

## Results

The motor, using 13 electromagnetic pole pairs to operate, contributes minimal influence on the error motions of the complete assembly. The 10R 606, rated to 50 nm, far exceeds the specification, exhibiting total radial error motions of 19 nm and total axial error motions of 4 nm when tested at 120 rpm. This is shown in Figures 4 and 5 using the Lion Spindle Error Analyzer (SEA). One interesting observation is the presence of an almost undetectable sub-nanometer harmonic located at 13 undulations per revolution (UPR) shown in Figure 5. This is the only measurable motor influence on the spindle error motion. This small contribution to the error motion might be attributed to the 13 electro-magnetic pole pairs in the motor. Another set of error motion tests were conducted with the probe target mounted an additional 150 mm (280 mm total) above the surface of the spindle with only ~1 nm increase in the total error motions. A rough calculation shows that the spindle demonstrates roughly 1 nanoradian of tilt accuracy [3].

<figure class="pf"><img src="/images/posters/10r-606-motorization-2019/fig4.webp" width="1200" height="752" alt="Two Spindle Error Analyzer screens of radial error motion polar plots and their frequency spectra" loading="lazy" /><figcaption><span class="fn">Figure 4.</span> Radial error motion results at 130 mm [left] and 280 mm [right] above the spindle</figcaption></figure>

<figure class="pf"><img src="/images/posters/10r-606-motorization-2019/fig5.webp" width="1200" height="824" alt="Spindle Error Analyzer screen of axial error motion, with an arrow at a small peak in the frequency spectrum" loading="lazy" /><figcaption><span class="fn">Figure 5.</span> Axial error motion results. The arrow indicates the motor influence (less than 1 nm) on the error motion</figcaption></figure>

## Conclusion

The upgrade of the Velociprobe at APS presents challenging mechanical design requirements. The spindle and motorization required are at the cutting edge of precision engineering. The large rotary system required nanometer level error motions and high stiffness in addition to having a large aperture to accommodate the extra instrumentation. The solution provided with the 10R-606 large aperture air bearing coupled with a specialized motor developed by Aerotech exceed these demands. The system also demonstrates incredible tilt accuracy of ~1 nanoradians.

## References

<ol class="refs">
<li><span class="rn">[1]</span> Preissner, C. et al. (2017) Earth Wind and Fire: The new fast scanning Velociprobe. MEDSI 2016, DOI: 10.18429/JACoW-MEDSI2016-TUAA02</li>
<li><span class="rn">[2]</span> U.S. Patent # 3,305,282, Hydrostatic Bearing Structure, Harold E. G. Arneson, Feb. 21, 1967</li>
<li><span class="rn">[3]</span> Marsh, Eric (2010) Precision Spindle Metrology.</li>
<li><span class="rn">[4]</span> Arneson, Dave (2018) Using error separation to test ultra high accuracy spindles. ASPE 2018. Las Vegas, NV, USA.</li>
</ol>
