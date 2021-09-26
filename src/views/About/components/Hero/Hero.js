import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    minHeight: 500,
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  textWhite: {
    color: 'white',
  },
  title: {
    fontWeight: 'bold',
  },
  section: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    paddingTop: 0,
    paddingBottom: 10,
    marginBottom: 10
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Image
        src="https://assets.maccarianagency.com/the-front/photos/about/hero-image.png"
        srcSet="https://assets.maccarianagency.com/the-front/photos/about/hero-image.png 2x"
        alt="About"
        className={classes.image}
        lazyProps={{
          width: '100%',
          height: '100%',
        }}
      />
      <Section className={classes.section}>
        <SectionHeader
          title="About us"
          subtitle="Achiever groups were founded by experienced information technology professionals and instructors who decided to concentrate in the hottest and fastest growing Information Technology (IT) areas: Machine learning , Web development ,Enterprise resource planning (ERP), automated software testing, database administration,IOT and Digital marketing. Our instructors also interview prospective candidates for permanent and consulting positions. They know first hand what skills students need to start a career in the IT field, pass job interviews, and successfully perform on the first job assignment. Our instructors work very hard and with a lot of personal attention to transfer that knowledge to each student and to keep the student well informed in all the latest industry developments."
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
      </Section>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
