import { ReactElement } from 'react';

export type LaunchesProps = {
  fairings: Fairings;
  links: Links;
  static_fire_date_utc: Date;
  static_fire_date_unix: number;
  net: boolean;
  window: number;
  rocket: Rocket;
  success: boolean;
  failures: any[];
  details: string;
  crew: any[];
  ships: any[];
  capsules: any[];
  payloads: Payload[];
  launchpad: string;
  flight_number: number;
  name: string;
  date_utc: Date;
  date_unix: number;
  date_local: Date;
  date_precision: string;
  upcoming: boolean;
  cores: Core[];
  auto_update: boolean;
  tbd: boolean;
  launch_library_id: null;
  id: string;
};

export type Core = {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: null;
  landing_type: null;
  landpad: null;
};

export type Fairings = {
  reused: boolean;
  recovery_attempt: boolean;
  recovered: boolean;
  ships: any[];
};

export type Links = {
  patch: Patch;
  reddit: Reddit;
  flickr: Flickr;
  presskit: null;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
};

export type Flickr = {
  small: any[];
  original: any[];
};

export type Patch = {
  small: string;
  large: string;
};

export type Reddit = {
  campaign: null;
  launch: null;
  media: null;
  recovery: null;
};

export type Payload = {
  dragon: Dragon;
  name: string;
  type: string;
  reused: boolean;
  launch: string;
  customers: string[];
  norad_ids: number[];
  nationalities: string[];
  manufacturers: string[];
  mass_kg: number;
  mass_lbs: number;
  orbit: string;
  reference_system: string;
  regime: string;
  longitude: null;
  semi_major_axis_km: number;
  eccentricity: number;
  periapsis_km: number;
  apoapsis_km: number;
  inclination_deg: number;
  period_min: number;
  lifespan_years: null;
  epoch: Date;
  mean_motion: number;
  raan: number;
  arg_of_pericenter: number;
  mean_anomaly: number;
  id: string;
};

export type Dragon = {
  capsule: null;
  mass_returned_kg: null;
  mass_returned_lbs: null;
  flight_time_sec: null;
  manifest: null;
  water_landing: null;
  land_landing: null;
};

export type Rocket = {
  height: Diameter;
  diameter: Diameter;
  mass: Mass;
  first_stage: FirstStage;
  second_stage: SecondStage;
  engines: Engines;
  landing_legs: LandingLegs;
  payload_weights: PayloadWeight[];
  flickr_images: string[];
  name: string;
  type: string;
  active: boolean;
  stages: number;
  boosters: number;
  cost_per_launch: number;
  success_rate_pct: number;
  first_flight: Date;
  country: string;
  company: string;
  wikipedia: string;
  description: string;
  id: string;
};

export type Diameter = {
  meters: number;
  feet: number;
};

export type Engines = {
  isp: ISP;
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
  number: number;
  type: string;
  version: string;
  layout: string;
  engine_loss_max: number;
  propellant_1: string;
  propellant_2: string;
  thrust_to_weight: number;
};

export type ISP = {
  sea_level: number;
  vacuum: number;
};

export type Thrust = {
  kN: number;
  lbf: number;
};

export type FirstStage = {
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
};

export type LandingLegs = {
  number: number;
  material: null;
};

export type Mass = {
  kg: number;
  lb: number;
};

export type PayloadWeight = {
  id: string;
  name: string;
  kg: number;
  lb: number;
};

export type SecondStage = {
  thrust: Thrust;
  payloads: Payloads;
  reusable: boolean;
  engines: number;
  fuel_amount_tons: number;
  burn_time_sec: number;
};

export type Payloads = {
  composite_fairing: CompositeFairing;
  option_1: string;
};

export type CompositeFairing = {
  height: Diameter;
  diameter: Diameter;
};

export type CardDetailProps = {
  label: string;
  detail?: string | Date;
  element?: string | ReactElement;
  type?: 'date';
};
