---
layout: blog_post
title: "Single-Stage-to-Orbit Atmosphere Skimmer"
date: "2026-08-25"
tags:
  - aerospace
  - hypersonics
  - propulsion
  - magnetohydrodynamics
description: "A combined-cycle SSTO concept that uses atmospheric air through turbine, ramjet, scramjet, and MHD regimes before becoming a rocket."
---

The atmosphere is not merely an obstacle between the runway and orbit. It is oxidizer, reaction mass, a compression field and, for one brief part of the climb, a conductive working fluid.

A single-stage-to-orbit atmosphere skimmer exploits each of those identities in sequence. It breathes air for as long as the sky remains useful, then becomes a rocket without discarding the vehicle that got it there.

## One Vehicle, Four Air-Breathing Regimes

At low speed, a [gas turbine with a rotating-detonation combustor](https://ntrs.nasa.gov/api/citations/20180000119/downloads/20180000119.pdf) makes thrust and drives a high-power alternator. The turbine supplies the mechanical compression. The rotating-detonation combustor supplies pressure-gain combustion.

As the vehicle accelerates, the inlet begins doing the compressor’s work. Propulsion duty moves outward into the airframe and through the high-speed flowpath:

**Gas turbine/RDE → Ramjet → Scramjet**

The vehicle remains one machine while the atmosphere takes over more of the machinery’s job.

## The MHD Window

At the far end of the scramjet regime, shock-compressed air reaches extreme enthalpy and begins to ionize. There is no magic Mach number where the atmosphere suddenly becomes plasma. There is a window.

Faster captured flow raises enthalpy and can improve conductivity. Climbing higher thins the air and removes reaction mass. Stronger electromagnetic interaction increases electrical and thermal losses. Seeding or deliberate ionization can widen the window, but only by spending power and carrying hardware.

Somewhere among those competing curves is a useful region in velocity–altitude–density space: enough conductivity to grip the flow electromagnetically, enough density to produce thrust, and enough time before the atmosphere becomes too thin to matter.

Inside that window, current driven through the conductive flow interacts with a magnetic field:

**f = J × B**

The Lorentz force drives the atmospheric plasma rearward. The vehicle goes forward.

This is the fourth air-breathing regime:

**Gas turbine/RDE → Ramjet → Scramjet → MHD-assisted atmosphere skimming**

## An Electromagnetic Transmission

At extreme hypersonic speed, [MHD becomes a transmission stretched across the engine](https://ntrs.nasa.gov/citations/20000095934).

**Inlet MHD generator conditions the flow and extracts electrical energy → combustion adds net chemical energy → downstream MHD accelerator returns that electrical energy to the flow as directed exhaust kinetic energy.**

The generator takes energy from the inlet while controlling the air entering the combustor. Fuel adds the energy required for net acceleration. The accelerator then puts the electrical portion back into the exhaust, after losses, as useful velocity.

The early turbine alternator can start and support this electrical system. If a turbine remains active deeper into the hypersonic climb, it does so through a protected secondary flowpath. The main duct belongs to the ramjet, scramjet and MHD system.

## Ride the Shock, Then Become a Rocket

A waverider is the natural airframe. Its shock provides lift. The same shock compresses the inlet flow. Its lower surface becomes intake, engine and expansion ramp. At hypersonic speed, the airframe and propulsion system become the same object.

The vehicle rides that coupled system through the MHD window. As the climb continues, density falls, atmospheric mass flow collapses and electromagnetic grip weakens. The inlet closes. Onboard fuel and oxidizer take over. The atmosphere skimmer becomes a LOX rocket and completes orbital insertion.

The complete flight sequence is:

**Takeoff → RDE gas turbine → Ramjet → Scramjet → MHD-assisted atmosphere skimming → LOX rocket → Orbit**

No discarded booster. No second vehicle. One airframe changing how it pushes against the universe.

## The Wager

The atmosphere supplies oxidizer and reaction mass throughout the air-breathing climb. Every kilogram borrowed from the sky is a kilogram that never has to leave the runway inside the vehicle.

The design lives or dies on one inequality:

**Propellant mass avoided > propulsion-system mass added**

Close that inequality, and the atmosphere stops being the thing a launch vehicle must escape. It becomes part of the engine that gets it there.
