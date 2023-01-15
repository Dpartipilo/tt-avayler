// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ships: [],
    },
    links: {
      patch: {
        small: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
        large: 'https://images2.imgbox.com/5b/02/QcxHUb5V_o.png',
      },
      reddit: {
        campaign: null,
        launch: null,
        media: null,
        recovery: null,
      },
      flickr: {
        small: [],
        original: [],
      },
      presskit: null,
      webcast: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
      youtube_id: '0a_00nJ_Y88',
      article: 'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
      wikipedia: 'https://en.wikipedia.org/wiki/DemoSat',
    },
    static_fire_date_utc: '2006-03-17T00:00:00.000Z',
    static_fire_date_unix: 1142553600,
    net: false,
    window: 0,
    rocket: {
      height: {
        meters: 22.25,
        feet: 73,
      },
      diameter: {
        meters: 1.68,
        feet: 5.5,
      },
      mass: {
        kg: 30146,
        lb: 66460,
      },
      first_stage: {
        thrust_sea_level: {
          kN: 420,
          lbf: 94000,
        },
        thrust_vacuum: {
          kN: 480,
          lbf: 110000,
        },
        reusable: false,
        engines: 1,
        fuel_amount_tons: 44.3,
        burn_time_sec: 169,
      },
      second_stage: {
        thrust: {
          kN: 31,
          lbf: 7000,
        },
        payloads: {
          composite_fairing: {
            height: {
              meters: 3.5,
              feet: 11.5,
            },
            diameter: {
              meters: 1.5,
              feet: 4.9,
            },
          },
          option_1: 'composite fairing',
        },
        reusable: false,
        engines: 1,
        fuel_amount_tons: 3.38,
        burn_time_sec: 378,
      },
      engines: {
        isp: {
          sea_level: 267,
          vacuum: 304,
        },
        thrust_sea_level: {
          kN: 420,
          lbf: 94000,
        },
        thrust_vacuum: {
          kN: 480,
          lbf: 110000,
        },
        number: 1,
        type: 'merlin',
        version: '1C',
        layout: 'single',
        engine_loss_max: 0,
        propellant_1: 'liquid oxygen',
        propellant_2: 'RP-1 kerosene',
        thrust_to_weight: 96,
      },
      landing_legs: {
        number: 0,
        material: null,
      },
      payload_weights: [
        {
          id: 'leo',
          name: 'Low Earth Orbit',
          kg: 450,
          lb: 992,
        },
      ],
      flickr_images: ['https://imgur.com/DaCfMsj.jpg', 'https://imgur.com/azYafd8.jpg'],
      name: 'Falcon 1',
      type: 'rocket',
      active: false,
      stages: 2,
      boosters: 0,
      cost_per_launch: 6700000,
      success_rate_pct: 40,
      first_flight: '2006-03-24',
      country: 'Republic of the Marshall Islands',
      company: 'SpaceX',
      wikipedia: 'https://en.wikipedia.org/wiki/Falcon_1',
      description:
        'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
      id: '5e9d0d95eda69955f709d1eb',
    },
    success: false,
    failures: [
      {
        time: 33,
        altitude: null,
        reason: 'merlin engine failure',
      },
    ],
    details: 'Engine failure at 33 seconds and loss of vehicle',
    crew: [],
    ships: [],
    capsules: [],
    payloads: [
      {
        dragon: {
          capsule: null,
          mass_returned_kg: null,
          mass_returned_lbs: null,
          flight_time_sec: null,
          manifest: null,
          water_landing: null,
          land_landing: null,
        },
        name: 'FalconSAT-2',
        type: 'Satellite',
        reused: false,
        launch: '5eb87cd9ffd86e000604b32a',
        customers: ['DARPA'],
        norad_ids: [],
        nationalities: ['United States'],
        manufacturers: ['SSTL'],
        mass_kg: 20,
        mass_lbs: 43,
        orbit: 'LEO',
        reference_system: 'geocentric',
        regime: 'low-earth',
        longitude: null,
        semi_major_axis_km: null,
        eccentricity: null,
        periapsis_km: 400,
        apoapsis_km: 500,
        inclination_deg: 39,
        period_min: null,
        lifespan_years: null,
        epoch: null,
        mean_motion: null,
        raan: null,
        arg_of_pericenter: null,
        mean_anomaly: null,
        id: '5eb0e4b5b6c3bb0006eeb1e1',
      },
    ],
    launchpad: '5e9e4502f5090995de566f86',
    flight_number: 1,
    name: 'FalconSat',
    date_utc: '2006-03-24T22:30:00.000Z',
    date_unix: 1143239400,
    date_local: '2006-03-25T10:30:00+12:00',
    date_precision: 'hour',
    upcoming: false,
    cores: [
      {
        core: '5e9e289df35918033d3b2623',
        flight: 1,
        gridfins: false,
        legs: false,
        reused: false,
        landing_attempt: false,
        landing_success: null,
        landing_type: null,
        landpad: null,
      },
    ],
    auto_update: true,
    tbd: false,
    launch_library_id: null,
    id: '5eb87cd9ffd86e000604b32a',
  });
}