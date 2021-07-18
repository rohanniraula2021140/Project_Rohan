--creating the table

create table staffs(staff_id number(4) not null, staff_f_name varchar2(15) not null,staff_l_name varchar2(15) not null, staff_address varchar2(20) not null, staff_phoneno NUMBER(15) not null;)
create table roles(role_id number(4) not null,role_type varchar2(15) not null unique,role_description varchar2(100) );
create table stages(stage_id number(4) not null, stage_name varchar2(15) not null unique, stage_descrption varchar2(100));
create table resources(resources_id number(4) not null, resources_name varchar2(15) not null unique, resources_description varchar2(100), resources_cost varchar2(8));
create table activities(activity_id number (4) not null, activity_name varchar2(15) not null unique, activity_aim varchar2(100),activity_time_frame varchar2(10) not null, activity_budget varchar2(10) not null);
create table costs(cost_id number(4) not null, item_name varchar2(10) not null , item_price_($) number(8) not null);
create table staff_roles(staff_id number(4) not null, role_id number(4) not null);
create table groups(staff_id number(4) not null, role_id number(4) not null,group_id number(4) not null, group_name varchar2(15) activity_id number(4) not null);
create table reviews(review_id number(4) not null, plan_id number(4) not null, group_id number(4) not null, review_time date not null,review_details varchar2(100) not null, review_location varchar2(15) not null);
create table actions(action_id number(4) not null, review_id number(4) not null, owner varchar2(15), review_deadline date);
create table activity_resources(activity_id number(4) not null, resources_id number(4) not null);



